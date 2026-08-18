import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { AuthService } from '../../../../Service/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  env = environment
  user: any = {
    login: false
  }
  constructor(private auth: AuthService, private router: Router) {
    this.user = {
      login: this.auth.getAuth("login") || false,
      name: this.auth.getAuth("name") || ""
    }
  }

  logout() {
    this.auth.deleteAuth()
    this.user = {
      login: false
    }
    this.router.navigate(['/login'])
  }
}
