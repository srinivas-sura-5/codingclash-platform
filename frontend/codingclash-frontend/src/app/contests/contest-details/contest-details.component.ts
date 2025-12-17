import { Component, OnInit } from '@angular/core';
import { ContestService } from '../services/contest.service';
import { Contest } from '../models/contest';
import { WalletService } from 'src/app/wallet/services/wallet.service';

@Component({
  selector: 'app-contest-details',
  templateUrl: './contest-details.component.html'
})
export class ContestDetailsComponent implements OnInit {

  contest!: Contest;
  countdown = '';
  showJoinModal = false;

  constructor(
    private contestService: ContestService,
    public walletService: WalletService
  ) {}

  ngOnInit(): void {
    this.contest = this.contestService.getContest();
    this.startCountdown();
  }

  // ⏱ TIMER
  startCountdown(): void {
    const interval = setInterval(() => {
      const diff = this.contest.startTime.getTime() - Date.now();

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      const m = Math.floor((diff / 1000 / 60) % 60);
      const s = Math.floor((diff / 1000) % 60);
      this.countdown = `${m}m ${s}s`;
    }, 1000);
  }

  // 🔘 JOIN FLOW
  openJoinModal(): void {
    if (this.contest.state !== 'WAITING') return;
    this.showJoinModal = true;
  }

  cancelJoin(): void {
    this.showJoinModal = false;
  }

  confirmJoin(): void {

    const success = this.walletService.deduct(
      this.contest.entryFee,
      `Joined contest: ${this.contest.name}`
    );

    if (!success) {
      alert('❌ Insufficient Wallet Balance');
      return;
    }

    this.contest.participants += 1;
    this.contestService.updateState();
    this.showJoinModal = false;

    alert('✅ Successfully joined contest');
  }

  // 🏁 CONTEST END (PHASE 11)
  endContest(): void {

    if (this.contest.state === 'COMPLETED') return;

    const { prizePool } = this.contestService.calculateContestMoney(
      this.contest.entryFee,
      this.contest.participants
    );

    this.contestService.distributePrizes(prizePool);

    this.contest.state = 'COMPLETED';

    alert('🏆 Contest completed & prizes distributed');
  }
}
