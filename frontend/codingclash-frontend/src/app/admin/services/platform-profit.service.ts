import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatformProfitService {

  private totalProfit = 0;

  addProfit(amount: number): void {
    this.totalProfit += amount;
  }

  getTotalProfit(): number {
    return this.totalProfit;
  }
}
