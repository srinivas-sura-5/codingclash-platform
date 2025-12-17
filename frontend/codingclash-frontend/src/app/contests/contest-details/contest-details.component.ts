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
  walletBalance = 100;

  showJoinModal = false;

  constructor(private contestService: ContestService) {}

  ngOnInit(): void {
    this.contest = this.contestService.getContest();
    this.startCountdown();
  }

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

  openJoinModal(): void {
    if (this.contest.state !== 'WAITING') return;
    this.showJoinModal = true;
  }

  cancelJoin(): void {
    this.showJoinModal = false;
  }

  confirmJoin(): void {
    if (this.walletBalance < this.contest.entryFee) {
      alert('Insufficient wallet balance');
      return;
    }

    // Deduct wallet
    this.walletBalance -= this.contest.entryFee;

    // Add participant
    this.contest.participants += 1;

    // Update state
    this.contestService.updateState();

    this.showJoinModal = false;
    alert('✅ Successfully joined contest');
  }
}
