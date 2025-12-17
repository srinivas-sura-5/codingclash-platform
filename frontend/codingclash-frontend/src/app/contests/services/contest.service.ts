import { Injectable } from '@angular/core';
import { Contest } from '../models/contest';

@Injectable({
  providedIn: 'root'
})
export class ContestService {

  contest: Contest = {
    id: 1,
    name: 'Beginner Coding Contest',
    entryFee: 50,
    prizePool: 350,
    participants: 6,
    minParticipants: 10,
    startTime: new Date(Date.now() + 10 * 60000),
    durationMinutes: 60,
    state: 'WAITING'
  };

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
      }, 10 * 60000); // 10 min delay
    }
  }
}
