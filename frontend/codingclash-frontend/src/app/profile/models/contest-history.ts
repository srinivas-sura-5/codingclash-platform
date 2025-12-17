export interface ContestHistory {
  contestId: number;
  contestName: string;
  rank: number;
  prizeWon: number; // 0 if no prize
  date: Date;
}
