import { Component, OnInit } from '@angular/core';
import { ContestService } from '../services/contest.service';
import { Contest } from '../models/contest';

@Component({
  selector: 'app-contest-details',
  templateUrl: './contest-details.component.html'
})
export class ContestDetailsComponent implements OnInit {

  contest!: Contest;
  countdown = '';

  constructor(private contestService: ContestService) {}

  ngOnInit(): void {
    this.contest = this.contestService.getContest();
    this.startCountdown();
  }

  startCountdown(): void {
    const interval = setInterval(() => {
      const diff = this.contest.startTime.getTime() - new Date().getTime();

      if (diff <= 0) {
        this.countdown = 'LIVE';
        clearInterval(interval);
        return;
      }

      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      this.countdown = `${minutes}m ${seconds}s`;
    }, 1000);
  }

  walletBalance = 40;

openJoinModal(): void {
  if (this.walletBalance < this.contest.entryFee) {
    alert('❌ Insufficient Wallet Balance. Please add money.');
    return;
  }

  alert('✅ Open Join Confirmation Modal (Phase 8)');
}

}
