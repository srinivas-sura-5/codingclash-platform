import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { JoinConfirmationComponent } from './components/join-confirmation/join-confirmation.component';
import { NavbarPublicComponent } from './components/navbar-public/navbar-public.component';
import { NavbarUserComponent } from './components/navbar-user/navbar-user.component';

@NgModule({
  declarations: [
    FooterComponent,
    JoinConfirmationComponent,
    NavbarPublicComponent,
    NavbarUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    JoinConfirmationComponent,
    NavbarPublicComponent,
    NavbarUserComponent
  ]
})
export class SharedModule {}
