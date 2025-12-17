import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../services/history.service';
import { ContestHistory } from '../models/contest-history';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  contests: ContestHistory[] = [];

  constructor(private historyService: HistoryService) {}

  ngOnInit(): void {
    this.contests = this.historyService.getHistory();
  }
}
