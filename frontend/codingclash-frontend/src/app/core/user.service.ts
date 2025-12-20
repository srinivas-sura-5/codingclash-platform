import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {

  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadUser() {
    return this.http.get<any>(`${environment.apiUrl}/auth/me`)
      .subscribe(user => {
        this.userSubject.next(user);
      });
  }

  getUser() {
    return this.userSubject.value;
  }

  clear() {
    this.userSubject.next(null);
  }
}
