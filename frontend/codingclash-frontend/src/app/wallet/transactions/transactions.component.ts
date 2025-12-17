import { Component, OnInit } from '@angular/core';
import { WalletService } from '../services/wallet.service';
import { WalletTransaction } from '../models/wallet-transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html'
})
export class TransactionsComponent implements OnInit {

  transactions: WalletTransaction[] = [];

  constructor(private walletService: WalletService) {}

  ngOnInit(): void {
    this.transactions = this.walletService.getTransactions();
  }
}
