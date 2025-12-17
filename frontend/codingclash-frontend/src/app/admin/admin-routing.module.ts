import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageContestsComponent } from './manage-contests/manage-contests.component';
import { PaymentsComponent } from './payments/payments.component';
import { UsersComponent } from './users/users.component';
import { LogsComponent } from './logs/logs.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'contests', component: ManageContestsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'logs', component: LogsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
