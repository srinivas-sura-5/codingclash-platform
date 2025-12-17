import { Injectable } from '@angular/core';
import { ContestHistory } from '../models/contest-history';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private history: ContestHistory[] = [
    {
      contestId: 1,
      contestName: 'Beginner Coding Contest',
      rank: 1,
      prizeWon: 175,
      date: new Date()
    },
    {
      contestId: 2,
      contestName: 'Intermediate Coding Contest',
      rank: 5,
      prizeWon: 0,
      date: new Date()
    }
  ];

  getHistory(): ContestHistory[] {
    return this.history;
  }
}
