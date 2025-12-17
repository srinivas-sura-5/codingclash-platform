import { Component, OnInit } from '@angular/core';
import { ContestResultService } from '../services/result.service';
import { ContestResult } from '../models/contest-result';

@Component({
  selector: 'app-contest-results',
  templateUrl: './contest-results.component.html'
})
export class ContestResultsComponent implements OnInit {

  results: ContestResult[] = [];

  constructor(private resultService: ContestResultService) {}

  ngOnInit(): void {
    this.results = this.resultService.getResults();
  }
}
