import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ResultService {

  constructor(private http: HttpClient) {}

  getResults(contestId: string) {
    return this.http.get<any[]>(
      `${environment.apiUrl}/results/${contestId}`
    );
  }
}
