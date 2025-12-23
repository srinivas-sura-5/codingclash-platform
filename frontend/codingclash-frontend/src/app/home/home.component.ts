import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/wallet/services/wallet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  walletBalance = 0;

  stats = {
    activeContests: 1,
    joinedContests: 0
  };

  featuredContest = {
    name: 'Beginner Coding Contest',
    entryFee: 50,
    startTime: new Date(Date.now() + 10 * 60000)
  };

  constructor(private walletService: WalletService) {}

  ngOnInit(): void {
    this.walletService.loadWallet();

    this.walletService.wallet$.subscribe(wallet => {
      if (wallet) {
        this.walletBalance = wallet.balance;
      }
    });
  }
}
