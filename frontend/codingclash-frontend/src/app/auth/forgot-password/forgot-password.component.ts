import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  submit() {
  if (this.form.invalid) return;

  console.log('FORGOT PASSWORD SUBMIT:', this.form.value);

  this.authService.forgotPassword(this.form.value)
    .subscribe({
      next: () => {
        alert('If account exists, reset email sent');
      },
      error: err => {
        console.error('FORGOT PASSWORD ERROR', err);
      }
    });
}

}
