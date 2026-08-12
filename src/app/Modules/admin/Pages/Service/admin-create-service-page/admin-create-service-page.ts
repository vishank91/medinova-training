import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiCallingService } from '../../../../../Service/api-calling-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-create-service-page',
  standalone: false,
  templateUrl: './admin-create-service-page.html',
  styleUrl: './admin-create-service-page.css',
})

export class AdminCreateServicePage {
  myForm = new FormGroup({
    name: new FormControl("", Validators.required),
    icon: new FormControl("", Validators.required),
    shortDescription: new FormControl("", Validators.required),
    status: new FormControl("1"),
  })
  get name() {
    return this.myForm.get("name")
  }
  get icon() {
    return this.myForm.get("icon")
  }
  get shortDescription() {
    return this.myForm.get("shortDescription")
  }

  constructor(private api: ApiCallingService, private router: Router) { }

  postData() {
    let item = {
      name: this.myForm.value.name,
      icon: this.myForm.value.icon,
      shortDescription: this.myForm.value.shortDescription,
      status: this.myForm.value.status === "1" ? true : false,
    }
    this.api.createRecord("service", item).subscribe((response: any) => {
      this.router.navigate(['/admin/service'])
    })
  }
}
