import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from 'src/app/core/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  register() {
  console.log('REGISTER CLICKED');

  if (this.registerForm.invalid) {
    console.log('FORM INVALID', this.registerForm.value);
    return;
  }

  console.log('FORM DATA', this.registerForm.value);

  this.authService.register(this.registerForm.value)
    .subscribe({
      next: (res) => {
        console.log('REGISTER SUCCESS', res);

        this.authService.saveToken(res.token);
        this.userService.loadUser();
        this.router.navigate(['/app/home']);
      },
      error: (err) => {
        console.error('REGISTER ERROR', err);
      }
    });
}


}
