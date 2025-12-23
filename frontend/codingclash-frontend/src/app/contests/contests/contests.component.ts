import { Component, OnInit } from '@angular/core';
import { ContestService } from '../services/contest.service';
import { Contest } from '../models/contest';

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html'
})
export class ContestsComponent implements OnInit {

  contests: Contest[] = [];

  constructor(private contestService: ContestService) {}

  ngOnInit(): void {
    this.contests = this.contestService.getContests();
  }
}
