import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { ApiCallingService } from '../../../../../Service/api-calling-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-create-package-page',
  standalone: false,
  templateUrl: './admin-create-package-page.html',
  styleUrl: './admin-create-package-page.css',
})
export class AdminCreatePackagePage {
  nameError = ""
  myForm = new FormGroup({
    name: new FormControl("", Validators.required),
    basePrice: new FormControl("", Validators.required),
    discount: new FormControl("", Validators.required),
    shortDescription: new FormControl("", Validators.required),
    pic: new FormControl<File | null>(null, [Validators.required, this.validatePic]),
    status: new FormControl("1"),
  })

  get name() {
    return this.myForm.get("name")
  }
  get basePrice() {
    return this.myForm.get("basePrice")
  }
  get discount() {
    return this.myForm.get("discount")
  }
  get shortDescription() {
    return this.myForm.get("shortDescription")
  }
  get pic() {
    return this.myForm.get("pic")
  }

  validatePic(control: FormControl): ValidationErrors | null {
    let file = control.value
    if (!file)
      return null

    if (!["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"].includes(file.type))
      return {
        invalidType: true
      }
    else if (file.size > 1048576)
      return {
        invalidSize: true
      }
    return null
  }

  constructor(private api: ApiCallingService, private router: Router) { }

  getInputImage(event: any) {
    let file = event.target.files[0]
    this.myForm.get("pic")?.setValue(file)
    this.myForm.get("pic")?.markAsTouched()
    this.myForm.get("pic")?.updateValueAndValidity()
  }


  postData() {
    this.api.getRecord("package").subscribe({
      next: (response: any) => {
        let item = response.find((x: any) => x.name.toLocaleLowerCase() === this.myForm.value.name?.toLocaleLowerCase())
        if (item) {
          this.nameError = "Package With This Name Already Exist"
        }
        else {
          let bp = Number(this.myForm.value.basePrice)
          let d = Number(this.myForm.value.discount)
          let fp = Math.round(bp - bp * d / 100)
          let item = {
            name: this.myForm.value.name,
            basePrice: bp,
            discount: d,
            finalPrice: fp,
            // pic: this.myForm.value.pic,
            pic: "packages/" + this.myForm.value.pic?.name,
            shortDescription: this.myForm.value.shortDescription,
            status: this.myForm.value.status === "1" ? true : false,
          }
          this.api.createRecord("package", item).subscribe({
            next: (response: any) => {
              this.router.navigate(['/admin/package'])
            },
            error: (error) => {
              this.nameError = error
            }
          })
        }
      },
      error: (error) => {
        this.nameError = "Internal Server Error"
      }
    })
  }
}
