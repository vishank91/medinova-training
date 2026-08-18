import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiCallingService } from '../../../../../Service/api-calling-service';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-admin-doctor-page',
  standalone: false,
  templateUrl: './admin-doctor-page.html',
  styleUrl: './admin-doctor-page.css',
})
export class AdminDoctorPage {
  data: any = []
  env = environment
  constructor(private api: ApiCallingService, private cdr: ChangeDetectorRef) { }

  deleteRecord(id: any) {
    if (window && window.confirm("Are You Sure You Want to Delete that Record : ")) {
      this.api.deleteRecord("doctor", { id: id }).subscribe((response) => {
        this.data = this.data.filter((x: any) => x.id !== id)
        this.cdr.detectChanges()
      })
    }
  }

  ngOnInit() {
    this.api.getRecord("doctor").subscribe({
      next: (response: any) => {
        this.data = response
        this.cdr.detectChanges()
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
