import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { JoinConfirmationComponent } from './components/join-confirmation/join-confirmation.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    JoinConfirmationComponent   // ✅ MUST BE HERE
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    JoinConfirmationComponent   // ✅ MUST BE HERE
  ]
})
export class SharedModule { }
