import Contest from '../models/Contest.js';
import { deductWallet } from './wallet.controller.js';

// ADMIN → CREATE CONTEST
export const createContest = async (req, res) => {
  const { name, entryFee } = req.body;

  const contest = await Contest.create({
    name,
    entryFee
  });

  res.json(contest);
};

// USER → GET ALL CONTESTS
export const getContests = async (req, res) => {
  const contests = await Contest.find();
  res.json(contests);
};

// USER → JOIN CONTEST
export const joinContest = async (req, res) => {
  const contest = await Contest.findById(req.params.id);

  if (!contest) {
    return res.status(404).json({ message: 'Contest not found' });
  }

  if (contest.state !== 'WAITING') {
    return res.status(400).json({ message: 'Contest not open for joining' });
  }

  if (contest.participants.includes(req.user.id)) {
    return res.status(400).json({ message: 'Already joined' });
  }

  // Deduct wallet
  const success = await deductWallet(
    req.user.id,
    contest.entryFee,
    `Joined contest: ${contest.name}`
  );

  if (!success) {
    return res.status(400).json({ message: 'Insufficient wallet balance' });
  }

  contest.participants.push(req.user.id);

  // Check minimum participants
  if (contest.participants.length >= contest.minParticipants) {
    contest.state = 'LOCKED';
    contest.prizePool = contest.entryFee * contest.participants.length * 0.7;
  }

  await contest.save();

  res.json({ message: 'Joined contest successfully' });
};
