import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserLayoutComponent } from './user-layout.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    UserLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule   // 🔥 THIS FIXES app-navbar-user ERROR
  ],
  exports: [
    UserLayoutComponent
  ]
})
export class UserLayoutModule {}
  