import { Injectable } from '@angular/core';
import { ContestResult } from '../models/contest-result';

@Injectable({
  providedIn: 'root'
})
export class ContestResultService {

  private results: ContestResult[] = [
    { userId: 1, username: 'Sura', score: 95, timeTaken: 3200, rank: 1 },
    { userId: 2, username: 'Ravi', score: 90, timeTaken: 3400, rank: 2 },
    { userId: 3, username: 'Anil', score: 88, timeTaken: 3600, rank: 3 },
    { userId: 4, username: 'Kiran', score: 80, timeTaken: 3900, rank: 4 }
  ];

  getResults(): ContestResult[] {
    return this.results;
  }
}
