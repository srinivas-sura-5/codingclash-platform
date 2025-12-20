import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // 🔥 Already logged-in users should not see login page
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  login() {
    if (this.loginForm.invalid) return;

    this.loading = true;
    this.error = '';

    this.authService.login(this.loginForm.value)
      .subscribe({
        next: res => {
          this.authService.saveToken(res.token);
          this.userService.loadUser(); // REAL USER CONTEXT
          this.router.navigate(['/app/home']);
        },
        error: err => {
          this.error = 'Invalid email or password';
          this.loading = false;
        }
      });
  }
}
