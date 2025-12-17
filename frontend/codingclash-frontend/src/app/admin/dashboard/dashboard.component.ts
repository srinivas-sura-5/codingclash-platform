import { Component, OnInit } from '@angular/core';
import { PlatformProfitService } from '../services/platform-profit.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  profit = 0;

  constructor(private profitService: PlatformProfitService) {}

  ngOnInit(): void {
    this.profit = this.profitService.getTotalProfit();
  }
}
