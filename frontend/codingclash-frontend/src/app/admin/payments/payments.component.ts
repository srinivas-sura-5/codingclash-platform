import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/wallet/services/wallet.service';
import { WalletTransaction } from 'src/app/wallet/models/wallet-transaction';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html'
})
export class PaymentsComponent implements OnInit {

  pendingDeposits: WalletTransaction[] = [];

  constructor(private walletService: WalletService) {}

  ngOnInit(): void {
    this.pendingDeposits = this.walletService
      .getTransactions()
      .filter(tx => tx.type === 'DEPOSIT' && tx.status === 'PENDING');
  }

  approve(txId: number): void {
    this.walletService.approveDeposit(txId);
    this.pendingDeposits = this.pendingDeposits.filter(t => t.id !== txId);
  }
}
