import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { ApiCallingService } from '../../../../../Service/api-calling-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-create-doctor-page',
  standalone: false,
  templateUrl: './admin-create-doctor-page.html',
  styleUrl: './admin-create-doctor-page.css',
})
export class AdminCreateDoctorPage {
  nameError = ""
  myForm = new FormGroup({
    name: new FormControl("", Validators.required),
    designation: new FormControl("", Validators.required),
    shortDescription: new FormControl("", Validators.required),
    pic: new FormControl<File | null>(null, [Validators.required, this.validatePic]),
    facebook: new FormControl(""),
    twitter: new FormControl(""),
    linkedin: new FormControl(""),
    instagram: new FormControl(""),
    youtube: new FormControl(""),
    status: new FormControl("1"),
  })

  get name() {
    return this.myForm.get("name")
  }
  get designation() {
    return this.myForm.get("designation")
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
    let item = {
      name: this.myForm.value.name,
      designation: this.myForm.value.designation,
      facebook: this.myForm.value.facebook,
      twitter: this.myForm.value.twitter,
      linkedin: this.myForm.value.linkedin,
      instagram: this.myForm.value.instagram,
      youtube: this.myForm.value.youtube,
      pic: "doctors/" + this.myForm.value.pic?.name,
      shortDescription: this.myForm.value.shortDescription,
      status: this.myForm.value.status === "1" ? true : false,
    }
    this.api.createRecord("doctor", item).subscribe({
      next: (response: any) => {
        this.router.navigate(['/admin/doctor'])
      },
      error: (error) => {
        this.nameError = error
      }
    })
  }
}
