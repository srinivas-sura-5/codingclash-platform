import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent {

  token!: string;

  form = this.fb.group({
    password: ['', Validators.required]
  });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.token = this.route.snapshot.params['token'];
  }

  reset() {
    if (this.form.invalid) return;

    this.authService.resetPassword({
      token: this.token,
      newPassword: this.form.value.password
    }).subscribe(() => {
      alert('Password reset successful');
      this.router.navigate(['/auth/login']);
    });
  }
}
