import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiCallingService } from '../../../../../Service/api-calling-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-update-doctor-page',
  standalone: false,
  templateUrl: './admin-update-doctor-page.html',
  styleUrl: './admin-update-doctor-page.css',
})
export class AdminUpdateDoctorPage {
  id = ""
  nameError = ""
  picError = ""
  picName = ""
  myForm = new FormGroup({
    name: new FormControl("", Validators.required),
    designation: new FormControl("", Validators.required),
    shortDescription: new FormControl("", Validators.required),
    status: new FormControl("1"),
    facebook: new FormControl(""),
    twitter: new FormControl(""),
    linkedin: new FormControl(""),
    instagram: new FormControl(""),
    youtube: new FormControl(""),
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

  constructor(
    private api: ApiCallingService,
    private router: Router,
    private activatedRoutes: ActivatedRoute,
    private cdr: ChangeDetectorRef) {
    this.activatedRoutes?.queryParams?.subscribe({
      next: (params: any) => {
        this.id = params.id
        this.api.getRecordById("doctor", { id: this.id }).subscribe({
          next: (response: any) => {
            this.myForm.patchValue({
              name: response.name,
              designation: response.designation,
              facebook: response.facebook,
              linkedin: response.linkedin,
              twitter: response.twitter,
              instagram: response.instagram,
              youtube: response.youtube,
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
      this.picName = "doctors/" + file.name
  }


  postData() {
    let item = {
      id: this.id,
      name: this.myForm.value.name,
      designation: this.myForm.value.designation,
      facebook: this.myForm.value.facebook,
      twitter: this.myForm.value.twitter,
      linkedin: this.myForm.value.linkedin,
      instagram: this.myForm.value.instagram,
      youtube: this.myForm.value.youtube,
      pic: this.picName,
      shortDescription: this.myForm.value.shortDescription,
      status: this.myForm.value.status === "1" ? true : false,
    }
    this.api.updateRecord("doctor", item).subscribe({
      next: (response: any) => {
        this.router.navigate(['/admin/doctor'])
      },
      error: (error) => {
        this.nameError = error
      }
    })
  }
}
