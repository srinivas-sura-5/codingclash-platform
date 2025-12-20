import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class WalletService {

  constructor(private http: HttpClient) {}

  getWallet() {
    return this.http.get<any>(
      `${environment.apiUrl}/wallet`
    );
  }

  deposit(amount: number) {
    return this.http.post(
      `${environment.apiUrl}/wallet/deposit`,
      { amount }
    );
  }

  getTransactions() {
    return this.http.get<any[]>(
      `${environment.apiUrl}/wallet/transactions`
    );
  }
}
