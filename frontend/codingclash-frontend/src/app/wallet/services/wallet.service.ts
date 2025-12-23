import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class WalletService {

  private walletSubject = new BehaviorSubject<any>(null);
  wallet$ = this.walletSubject.asObservable();

  constructor(private http: HttpClient) {}

  /* ======================
     LOAD USER WALLET
  ====================== */
  loadWallet(): void {
    this.http.get<any>(`${environment.apiUrl}/wallet`)
      .subscribe({
        next: wallet => this.walletSubject.next(wallet),
        error: () => this.walletSubject.next({ balance: 0 })
      });
  }

  /* ======================
     USER DEPOSIT REQUEST
  ====================== */
  deposit(amount: number): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/wallet/deposit`,
      { amount }
    );
  }

  /* ======================
     USER TRANSACTIONS
  ====================== */
  getTransactions(): Observable<any[]> {
    return this.http.get<any[]>(
      `${environment.apiUrl}/wallet/transactions`
    );
  }

  /* ======================
     ADMIN → APPROVE DEPOSIT
  ====================== */
  approveDeposit(txId: string): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/wallet/approve/${txId}`,
      {}
    );
  }

  /* ======================
     CONTEST JOIN (DEDUCT)
  ====================== */
  deductForContest(contestId: string): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/contests/join`,
      { contestId }
    );
  }

  /* ======================
     PRIZE CREDIT
  ====================== */
  creditPrize(amount: number, reason: string): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/wallet/prize`,
      { amount, reason }
    );
  }
}
