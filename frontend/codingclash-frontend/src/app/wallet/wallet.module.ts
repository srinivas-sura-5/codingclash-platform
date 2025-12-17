import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletDashboardComponent } from './wallet-dashboard/wallet-dashboard.component';
import { AddMoneyComponent } from './add-money/add-money.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [
    WalletDashboardComponent,
    AddMoneyComponent,
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule
  ]
})
export class WalletModule {}
