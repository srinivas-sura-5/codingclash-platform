import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/wallet/services/wallet.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html'
})
export class PaymentsComponent implements OnInit {

  pendingDeposits: any[] = [];

  constructor(private walletService: WalletService) {}

  ngOnInit(): void {
    this.loadPending();
  }

  loadPending() {
    this.walletService.getTransactions()
      .subscribe((txs: any[]) => {
        this.pendingDeposits = txs.filter(
          tx => tx.type === 'DEPOSIT' && tx.status === 'PENDING'
        );
      });
  }

  approve(txId: string) {
    this.walletService.approveDeposit(txId)
      .subscribe(() => {
        alert('Deposit approved');
        this.loadPending();
      });
  }
}
