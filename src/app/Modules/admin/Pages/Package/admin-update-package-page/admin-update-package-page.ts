import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiCallingService } from '../../../../../Service/api-calling-service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-admin-update-package-page',
  standalone: false,
  templateUrl: './admin-update-package-page.html',
  styleUrl: './admin-update-package-page.css',
})
export class AdminUpdatePackagePage {
  id = ""
  nameError = ""
  picError = ""
  picName = ""
  myForm = new FormGroup({
    name: new FormControl("", Validators.required),
    basePrice: new FormControl("", Validators.required),
    discount: new FormControl("", Validators.required),
    shortDescription: new FormControl("", Validators.required),
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

  constructor(
    private api: ApiCallingService,
    private router: Router,
    private activatedRoutes: ActivatedRoute,
    private cdr: ChangeDetectorRef) {
    this.activatedRoutes?.queryParams?.subscribe({
      next: (params: any) => {
        this.id = params.id
        this.api.getRecordById("package", { id: this.id }).subscribe({
          next: (response: any) => {
            this.myForm.patchValue({
              name: response.name,
              basePrice: response.basePrice,
              discount: response.discount,
              shortDescription: response.shortDescription,
            })
            this.picName = response.pic
            this.cdr.detectChanges
          },
          error: (error) => {
            console.log(error)
            this.nameError = "Internal Server Error"
          }
        })
      },
      error: (error) => {
        console.log(error)
        this.nameError = "Internal Server Error"
      }
    })
  }

  getInputImage(event: any) {
    let file = event.target.files[0]
    if (!["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"].includes(file.type))
      this.picError = "Please Upload a File of Type .jpeg, .png,.jpg,.gif"
    else if (file.size > 1048576)
      this.picError = "File Size Must Be Less Then 1 MB"
    else
      this.picName = "packages/" + file.name
  }


  postData() {
    this.api.getRecord("package").subscribe({
      next: (response: any) => {
        let item = response.find((x: any) => x.id !== this.id && x.name.toLocaleLowerCase() === this.myForm.value.name?.toLocaleLowerCase())
        if (item) {
          this.nameError = "Package With This Name Already Exist"
        }
        else {
          let bp = Number(this.myForm.value.basePrice)
          let d = Number(this.myForm.value.discount)
          let fp = Math.round(bp - bp * d / 100)
          let item = {
            id: this.id,
            name: this.myForm.value.name,
            basePrice: bp,
            discount: d,
            finalPrice: fp,
            pic: this.picName,
            shortDescription: this.myForm.value.shortDescription,
            status: this.myForm.value.status === "1" ? true : false,
          }
          this.api.updateRecord("package", item).subscribe({
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
