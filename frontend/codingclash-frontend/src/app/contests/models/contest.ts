export interface Contest {
  id: number;
  name: string;
  entryFee: number;
  prizePool: number;
  participants: number;
  minParticipants: number;
  startTime: Date;
  durationMinutes: number;
  state: 'UPCOMING' | 'WAITING' | 'LOCKED' | 'LIVE' | 'COMPLETED';
}
