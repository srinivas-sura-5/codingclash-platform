export interface WalletTransaction {
  id: number;
  type: 'DEPOSIT' | 'DEBIT' | 'PRIZE';
  amount: number;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  date: Date;
  description: string;
}
