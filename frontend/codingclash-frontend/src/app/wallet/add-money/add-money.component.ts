import { Component } from '@angular/core';
import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html'
})
export class AddMoneyComponent {

  amount = 0;

  constructor(private walletService: WalletService) {}

  submit(): void {
    if (this.amount > 0) {
      this.walletService.requestDeposit(this.amount);
      alert('Deposit request submitted');
    }
  }
}
