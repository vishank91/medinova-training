import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiCallingService } from '../../../../Service/api-calling-service';
import { AuthService } from '../../../../Service/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  message = ""
  myForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  })

  constructor(private api: ApiCallingService, private auth: AuthService, private router: Router) { }


  postData() {
    this.api.getRecord("user").subscribe({
      next: (response: any) => {
        let item: any = response.find((x: any) => (x.username === this.myForm.value.username || x.email === this.myForm.value.username) && x.password === this.myForm.value.password)
        if (item) {
          this.auth.setAuth("login", true)
          this.auth.setAuth("userid", item.id)
          this.auth.setAuth("name", item.name)
          this.auth.setAuth("role", item.role)
          this.router.navigate(['/admin'])
        }
        else
          this.message = "Invalid Username Or Password"
      },
      error: () => {
        this.message = "Internal Server Error"
      }
    })
  }
}
