import { Component, OnInit } from '@angular/core';
import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'app-wallet-dashboard',
  templateUrl: './wallet-dashboard.component.html'
})
export class WalletDashboardComponent implements OnInit {

  balance = 0;

  constructor(private walletService: WalletService) {}

  ngOnInit(): void {
    this.balance = this.walletService.getBalance();
  }
}
