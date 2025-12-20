import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ContestService {

  constructor(private http: HttpClient) {}

  getContests() {
    return this.http.get<any[]>(
      `${environment.apiUrl}/contests`
    );
  }

  joinContest(id: string) {
    return this.http.post(
      `${environment.apiUrl}/contests/join/${id}`,
      {}
    );
  }
}
