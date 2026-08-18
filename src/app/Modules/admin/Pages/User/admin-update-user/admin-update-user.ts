import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiCallingService } from '../../../../../Service/api-calling-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-update-user',
  standalone: false,
  templateUrl: './admin-update-user.html',
  styleUrl: './admin-update-user.css',
})
export class AdminUpdateUser {
  id = ""
  user: any = {}

  usernameError = ""
  emailError = ""
  myForm = new FormGroup({
    name: new FormControl("", Validators.required),
    username: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    role: new FormControl("Admin"),
    status: new FormControl("1"),
  })

  get name() {
    return this.myForm.get("name")
  }
  get username() {
    return this.myForm.get("username")
  }
  get email() {
    return this.myForm.get("email")
  }
  get phone() {
    return this.myForm.get("phone")
  }

  resetError(event: any) {
    let name = event.target.name
    if (name === "username")
      this.usernameError = ""
    else if (name === "email")
      this.emailError = ""
  }

  constructor(private api: ApiCallingService, private router: Router, private activatedRoutes: ActivatedRoute) {
    this.activatedRoutes?.queryParams?.subscribe({
      next: (params: any) => {
        this.id = params.id
        this.api.getRecordById("user", { id: this.id }).subscribe({
          next: (response: any) => {
            this.user = { ...response }
            this.myForm.patchValue({
              name: response.name,
              username: response.username,
              email: response.email,
              phone: response.phone,
              role: response.role,
              status: response.status ? "1" : "0",
            })
          }
        })
      },
      error: () => {
        this.usernameError = "Internal Server Error"
      }
    })
  }
  postData() {
    this.api.getRecord("user").subscribe({
      next: (response: any) => {
        let item = response.find((x: any) => x.id !== this.id && (x.username.toLocaleLowerCase() === this.myForm.value.username?.toLocaleLowerCase() || x.email.toLocaleLowerCase() === this.myForm.value.email?.toLocaleLowerCase()))
        if (item) {
          this.usernameError = item.username?.toLocaleLowerCase() === this.myForm.value.username?.toLocaleLowerCase() ? "User With This Username is Already Exist" : ""
          this.emailError = item.email?.toLocaleLowerCase() === this.myForm.value.email?.toLocaleLowerCase() ? "User With This Email is Already Exist" : ""
        }
        else {
          let item = {
            ...this.user,
            name: this.myForm.value.name,
            username: this.myForm.value.username,
            email: this.myForm.value.email,
            phone: this.myForm.value.phone,
            role: this.myForm.value.role,
            status: this.myForm.value.status === "1" ? true : false,
          }
          this.api.updateRecord("user", item).subscribe({
            next: (response: any) => {
              this.router.navigate(['/admin/user'])
            },
            error: (error) => {
              this.usernameError = error
            }
          })
        }
      },
      error: (error) => {
        this.usernameError = "Internal Server Error"
      }
    })
  }
}
