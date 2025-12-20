import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) {}

  login(data: any) {
  return this.http.post<any>(
    'http://localhost:5000/api/auth/login',
    data
  );
}

register(data: any) {
  return this.http.post<any>(
    'http://localhost:5000/api/auth/register',
    data
  );
}



  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn(): boolean {
  return !!localStorage.getItem('token');
}

}
