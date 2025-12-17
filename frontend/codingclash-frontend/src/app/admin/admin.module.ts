import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageContestsComponent } from './manage-contests/manage-contests.component';
import { UsersComponent } from './users/users.component';
import { PaymentsComponent } from './payments/payments.component';
import { LogsComponent } from './logs/logs.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ManageContestsComponent,
    UsersComponent,
    PaymentsComponent,
    LogsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
