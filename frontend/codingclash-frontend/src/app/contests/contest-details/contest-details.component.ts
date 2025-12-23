import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContestService } from '../services/contest.service';
import { Contest } from '../models/contest';

@Component({
  selector: 'app-contest-details',
  templateUrl: './contest-details.component.html'
})
export class ContestDetailsComponent implements OnInit {

  contest!: Contest;

  constructor(
    private route: ActivatedRoute,
    private contestService: ContestService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contest = this.contestService.getContestById(id)!;
  }

  showJoinModal = false;

openJoinModal(): void {
  if (this.contest.state !== 'WAITING') return;
  this.showJoinModal = true;
}

cancelJoin(): void {
  this.showJoinModal = false;
}

confirmJoin(): void {

  // TEMP: simulate wallet balance
  const walletBalance = 100; // later API

  if (walletBalance < this.contest.entryFee) {
    alert('❌ Insufficient Wallet Balance');
    return;
  }

  // simulate join
  this.contest.participants += 1;

  if (this.contest.participants >= this.contest.minParticipants) {
    this.contest.state = 'LOCKED';
  }

  this.showJoinModal = false;

  alert('✅ Successfully joined contest');
}


}
