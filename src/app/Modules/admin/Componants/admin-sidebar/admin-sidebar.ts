import { Component } from '@angular/core';
import { AuthService } from '../../../../Service/auth-service';

@Component({
  selector: 'app-admin-sidebar',
  standalone: false,
  templateUrl: './admin-sidebar.html',
  styleUrl: './admin-sidebar.css',
})
export class AdminSidebar {
  role = "Admin"

  constructor(private auth: AuthService) {
    this.role = this.auth.getAuth("role") || "Admin"
  }
}
