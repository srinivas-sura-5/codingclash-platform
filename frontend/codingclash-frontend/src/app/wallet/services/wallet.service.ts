import { Injectable } from '@angular/core';
import { WalletTransaction } from '../models/wallet-transaction';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private balance = 100;
  private transactions: WalletTransaction[] = [];

  getBalance(): number {
    return this.balance;
  }

  getTransactions(): WalletTransaction[] {
    return this.transactions;
  }

  requestDeposit(amount: number): void {
    this.transactions.push({
      id: Date.now(),
      type: 'DEPOSIT',
      amount,
      status: 'PENDING',
      date: new Date(),
      description: 'Manual UPI deposit'
    });
  }

  approveDeposit(id: number): void {
    const tx = this.transactions.find(t => t.id === id);
    if (!tx || tx.status !== 'PENDING') return;

    tx.status = 'APPROVED';
    this.balance += tx.amount;
  }

  deduct(amount: number, description: string): boolean {
    if (this.balance < amount) return false;

    this.balance -= amount;
    this.transactions.push({
      id: Date.now(),
      type: 'DEBIT',
      amount,
      status: 'APPROVED',
      date: new Date(),
      description
    });
    return true;
  }

  addPrize(amount: number): void {
    this.balance += amount;
    this.transactions.push({
      id: Date.now(),
      type: 'PRIZE',
      amount,
      status: 'APPROVED',
      date: new Date(),
      description: 'Contest prize'
    });
  }
}
