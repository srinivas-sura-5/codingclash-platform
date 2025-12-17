import { Injectable } from '@angular/core';
import { Contest } from '../models/contest';
import { PlatformProfitService } from 'src/app/admin/services/platform-profit.service';
import { WalletService } from 'src/app/wallet/services/wallet.service';

@Injectable({
  providedIn: 'root'
})
export class ContestService {

  contest: Contest = {
    id: 1,
    name: 'Beginner Coding Contest',
    entryFee: 50,
    prizePool: 0,
    participants: 0,
    minParticipants: 10,
    startTime: new Date(Date.now() + 10 * 60000),
    durationMinutes: 60,
    state: 'WAITING'
  };

  constructor(
    private profitService: PlatformProfitService,
    private walletService: WalletService
  ) {}

  getContest(): Contest {
    return this.contest;
  }

  updateState(): void {
    if (this.contest.participants < this.contest.minParticipants) {
      this.contest.state = 'WAITING';
    } else if (this.contest.participants >= this.contest.minParticipants) {
      this.contest.state = 'LOCKED';

      setTimeout(() => {
        this.contest.state = 'LIVE';
      }, 10 * 60000);
    }
  }

  // ✅ FIXED: accepts arguments
  calculateContestMoney(entryFee: number, participants: number) {
    const total = entryFee * participants;
    const prizePool = total * 0.7;
    const platformProfit = total * 0.3;

    this.profitService.addProfit(platformProfit);

    return { prizePool, platformProfit };
  }

  // ✅ FIXED: accepts prizePool
  distributePrizes(prizePool: number): void {
    const first = prizePool * 0.5;
    const second = prizePool * 0.3;
    const third = prizePool * 0.2;

    this.walletService.addPrize(first);
    this.walletService.addPrize(second);
    this.walletService.addPrize(third);
  }
}
