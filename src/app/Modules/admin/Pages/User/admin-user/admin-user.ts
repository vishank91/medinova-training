import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiCallingService } from '../../../../../Service/api-calling-service';

@Component({
  selector: 'app-admin-user',
  standalone: false,
  templateUrl: './admin-user.html',
  styleUrl: './admin-user.css',
})
export class AdminUser {
  data: any = []
  constructor(private api: ApiCallingService, private cdr: ChangeDetectorRef) { }

  deleteRecord(id: any) {
    if (window && window.confirm("Are You Sure You Want to Delete that Record : ")) {
      this.api.deleteRecord("user", { id: id }).subscribe((response) => {
        this.data = this.data.filter((x: any) => x.id !== id)
        this.cdr.detectChanges()
      })
    }
  }

  ngOnInit() {
    this.api.getRecord("user").subscribe((response: any) => {
      this.data = response
      this.cdr.detectChanges()
    })
  }
}
