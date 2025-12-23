import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup;
  error = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/)
      ]],
      password: ['', Validators.required]
    });
  }

  register() {
    if (this.registerForm.invalid) return;

    this.authService.register(this.registerForm.value)
      .subscribe({
        next: () => {
          this.router.navigate(['/auth/login'], {
            queryParams: { registered: 'true' }
          });
        },
        error: err => {
          this.error = err.error?.message || 'Registration failed';
        }
      });
  }
}
