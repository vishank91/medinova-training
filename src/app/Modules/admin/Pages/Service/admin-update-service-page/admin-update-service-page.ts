import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiCallingService } from '../../../../../Service/api-calling-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-update-service-page',
  standalone: false,
  templateUrl: './admin-update-service-page.html',
  styleUrl: './admin-update-service-page.css',
})
export class AdminUpdateServicePage {
  id = ""
  nameError = ""
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

  constructor(
    private api: ApiCallingService,
    private router: Router,
    private activatedRoutes: ActivatedRoute,
    private cdr: ChangeDetectorRef) {
    this.activatedRoutes?.queryParams?.subscribe((params: any) => {
      this.id = params.id
      this.api.getRecordById("service", { id: this.id }).subscribe({
        next: (response: any) => {
          this.myForm.patchValue({
            name: response.name,
            icon: response.icon,
            shortDescription: response.shortDescription,
            status: response.status ? "1" : "0",
          })
          this.cdr.detectChanges()
        },
        error: (error) => {
          this.nameError = "Internal Server Error"
        }
      })
    })
  }

  postData() {
    this.api.getRecord("service").subscribe({
      next: (response: any) => {
        let item = response.find((x: any) => x.id !== this.id && x.name.toLocaleLowerCase() === this.myForm.value.name?.toLocaleLowerCase())
        if (item) {
          this.nameError = "Service With This Name Already Exist"
        }
        else {
          let item = {
            id: this.id,
            name: this.myForm.value.name,
            icon: this.myForm.value.icon,
            shortDescription: this.myForm.value.shortDescription,
            status: this.myForm.value.status === "1" ? true : false,
          }
          this.api.updateRecord("service", item).subscribe({
            next: (response: any) => {
              this.router.navigate(['/admin/service'])
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
