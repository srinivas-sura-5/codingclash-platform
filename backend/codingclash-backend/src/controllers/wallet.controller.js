import Wallet from '../models/wallet.js';
import WalletTransaction from '../models/WalletTransaction.js';



export const getWallet = async (req, res) => {
  let wallet = await Wallet.findOne({ userId: req.user.id });

  if (!wallet) {
    wallet = await Wallet.create({ userId: req.user.id });
  }

  res.json(wallet);
};

// USER → DEPOSIT REQUEST
export const requestDeposit = async (req, res) => {
  const { amount } = req.body;

  const tx = await WalletTransaction.create({
    userId: req.user.id,
    type: 'DEPOSIT',
    amount,
    status: 'PENDING',
    description: 'Manual UPI deposit'
  });

  res.json({ message: 'Deposit request submitted', tx });
};

// ADMIN → APPROVE DEPOSIT
export const approveDeposit = async (req, res) => {
  const tx = await WalletTransaction.findById(req.params.id);
  if (!tx || tx.status !== 'PENDING') {
    return res.status(400).json({ message: 'Invalid transaction' });
  }

  tx.status = 'APPROVED';
  await tx.save();

  let wallet = await Wallet.findOne({ userId: tx.userId });
  if (!wallet) {
    wallet = await Wallet.create({ userId: tx.userId });
  }

  wallet.balance += tx.amount;
  await wallet.save();

  res.json({ message: 'Deposit approved & wallet credited' });
};

// USER → TRANSACTIONS
export const getTransactions = async (req, res) => {
  const txs = await WalletTransaction.find({ userId: req.user.id })
    .sort({ createdAt: -1 });
  res.json(txs);
};

// INTERNAL → DEDUCT (contest join)
export const deductWallet = async (userId, amount, description) => {
  const wallet = await Wallet.findOne({ userId });
  if (!wallet || wallet.balance < amount) return false;

  wallet.balance -= amount;
  await wallet.save();

  await WalletTransaction.create({
    userId,
    type: 'DEBIT',
    amount,
    status: 'APPROVED',
    description
  });

  return true;
};
