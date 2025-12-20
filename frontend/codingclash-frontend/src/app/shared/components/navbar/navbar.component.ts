import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  user$ = this.userService.user$;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  logout() {
    this.authService.logout();
    this.userService.clear();
    location.href = '/login';
  }

  isLoggedIn = false;

ngOnInit() {
  this.isLoggedIn = this.authService.isLoggedIn();
}

}
