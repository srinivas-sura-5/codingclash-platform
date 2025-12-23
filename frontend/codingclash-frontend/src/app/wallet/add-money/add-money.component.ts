import { Component } from '@angular/core';
import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html'
})
export class AddMoneyComponent {

  amount = 0;
  loading = false;

  constructor(private walletService: WalletService) {}

  submit() {
    if (this.amount <= 0) return;

    this.loading = true;

    this.walletService.deposit(this.amount)
      .subscribe(() => {
        alert('Deposit request sent for admin approval');
        this.amount = 0;
        this.loading = false;
      });
  }
}
