import { Component, OnInit } from '@angular/core';
import { UserService } from './core/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'codingclash-frontend';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.userService.loadUser();
    }
  }
}
