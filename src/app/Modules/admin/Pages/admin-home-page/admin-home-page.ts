import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiCallingService } from '../../../../Service/api-calling-service';
import { AuthService } from '../../../../Service/auth-service';

@Component({
  selector: 'app-admin-home-page',
  standalone: false,
  templateUrl: './admin-home-page.html',
  styleUrl: './admin-home-page.css',
})
export class AdminHomePage {
  data: any = {}

  constructor(private api: ApiCallingService, private cdr: ChangeDetectorRef, private auth: AuthService) {

  }

  ngOnInit() {
    this.api.getRecordById("user", { id: this.auth.getAuth('userid') }).subscribe({
      next: (response: any) => {
        this.data = response
        this.cdr.detectChanges()
      },
      error: (error) => {
        alert("Internal Server Error")
      }
    })
  }
}
