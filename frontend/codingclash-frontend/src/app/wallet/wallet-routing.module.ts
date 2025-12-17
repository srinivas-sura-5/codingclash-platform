import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalletDashboardComponent } from './wallet-dashboard/wallet-dashboard.component';
import { AddMoneyComponent } from './add-money/add-money.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  { path: '', component: WalletDashboardComponent },
  { path: 'add', component: AddMoneyComponent },
  { path: 'transactions', component: TransactionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule {}
