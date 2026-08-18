import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiCallingService } from '../../../../../Service/api-calling-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-create-user',
  standalone: false,
  templateUrl: './admin-create-user.html',
  styleUrl: './admin-create-user.css',
})
export class AdminCreateUser {
  usernameError = ""
  emailError = ""
  passwordError = ""
  myForm = new FormGroup({
    name: new FormControl("", Validators.required),
    username: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    cpassword: new FormControl("", Validators.required),
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
  get password() {
    return this.myForm.get("password")
  }

  constructor(private api: ApiCallingService, private router: Router) { }
  postData() {
    this.api.getRecord("user").subscribe({
      next: (response: any) => {
        let item = response.find((x: any) => x.username.toLocaleLowerCase() === this.myForm.value.username?.toLocaleLowerCase() || x.email.toLocaleLowerCase() === this.myForm.value.email?.toLocaleLowerCase())
        if (item) {
          this.usernameError = item.username?.toLocaleLowerCase() === this.myForm.value.username?.toLocaleLowerCase() ? "User With This Username is Already Exist" : ""
          this.emailError = item.email?.toLocaleLowerCase() === this.myForm.value.email?.toLocaleLowerCase() ? "User With This Email is Already Exist" : ""
        }
        else if (this.myForm.value.password !== this.myForm.value.cpassword) {
          this.passwordError = "Password and Confirm Password Doesn't Matched"
        }
        else {
          let item = {
            name: this.myForm.value.name,
            username: this.myForm.value.username,
            email: this.myForm.value.email,
            phone: this.myForm.value.phone,
            password: this.myForm.value.password,
            role: this.myForm.value.role,
            status: this.myForm.value.status === "1" ? true : false,
          }
          this.api.createRecord("user", item).subscribe({
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
