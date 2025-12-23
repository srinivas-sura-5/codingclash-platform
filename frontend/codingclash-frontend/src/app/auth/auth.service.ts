import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post<any>(
      `${environment.apiUrl}/auth/login`,
      data
    );
  }

  register(data: any) {
    return this.http.post<any>(
      `${environment.apiUrl}/auth/register`,
      data
    );
  }

  forgotPassword(data: any) {
    return this.http.post(
      `${environment.apiUrl}/auth/forgot-password`,
      data
    );
  }

  resetPassword(data: any) {
    return this.http.post(
      `${environment.apiUrl}/auth/reset-password`,
      data
    );
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.clear();
  }
}
