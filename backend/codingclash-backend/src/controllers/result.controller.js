import Contest from '../models/Contest.js';
import Result from '../models/Result.js';
import Wallet from '../models/wallet.js';
import WalletTransaction from '../models/WalletTransaction.js';

// ADMIN → COMPLETE CONTEST
export const completeContest = async (req, res) => {
  const contest = await Contest.findById(req.params.id);

  if (!contest) {
    return res.status(404).json({ message: 'Contest not found' });
  }

  if (contest.state === 'COMPLETED') {
    return res.status(400).json({ message: 'Contest already completed' });
  }

  const totalParticipants = contest.participants.length;

  if (totalParticipants < contest.minParticipants) {
    return res.status(400).json({
      message: 'Minimum participants not reached'
    });
  }

  // Prize pool already calculated at LOCK
  const prizePool = contest.prizePool;

  const prizes = [
    prizePool * 0.5,
    prizePool * 0.3,
    prizePool * 0.2
  ];

  // TEMP LOGIC: first 3 participants as winners
  const winners = contest.participants.slice(0, 3);

  for (let i = 0; i < winners.length; i++) {
    // Credit wallet
    let wallet = await Wallet.findOne({ userId: winners[i] });
    if (!wallet) {
      wallet = await Wallet.create({ userId: winners[i] });
    }

    wallet.balance += prizes[i];
    await wallet.save();

    await WalletTransaction.create({
      userId: winners[i],
      type: 'PRIZE',
      amount: prizes[i],
      status: 'APPROVED',
      description: `Prize for contest ${contest.name}`
    });

    await Result.create({
      contestId: contest._id,
      userId: winners[i],
      rank: i + 1,
      prize: prizes[i]
    });
  }

  contest.state = 'COMPLETED';
  await contest.save();

  res.json({ message: 'Contest completed & prizes distributed' });
};

// USER → GET RESULTS
export const getResults = async (req, res) => {
  const results = await Result.find({ contestId: req.params.id })
    .populate('userId', 'name');

  res.json(results);
};
