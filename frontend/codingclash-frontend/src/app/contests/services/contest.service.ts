import { Injectable } from '@angular/core';
import { Contest } from '../models/contest';

@Injectable({ providedIn: 'root' })
export class ContestService {

  private contests: Contest[] = [
    {
      id: 1,
      name: 'Beginner Coding Contest',
      entryFee: 50,
      prizePool: 350,
      participants: 7,
      minParticipants: 10,
      startTime: new Date(Date.now() + 10 * 60000),
      durationMinutes: 60,
      state: 'WAITING'
    }
  ];

  getContests(): Contest[] {
    return this.contests;
  }

  getContestById(id: number): Contest | undefined {
    return this.contests.find(c => c.id === id);
  }
}
