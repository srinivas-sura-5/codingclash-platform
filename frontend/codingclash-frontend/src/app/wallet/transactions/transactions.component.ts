import { Component, OnInit } from '@angular/core';
import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html'
})
export class TransactionsComponent implements OnInit {

  transactions: any[] = [];

  constructor(private walletService: WalletService) {}

  ngOnInit(): void {
    this.walletService.getTransactions()
      .subscribe((txs: any[]) => {
        this.transactions = txs;
      });
  }
}
