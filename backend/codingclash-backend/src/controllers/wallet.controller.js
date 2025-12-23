import Wallet from '../models/Wallet.js';
import WalletTransaction from '../models/WalletTransaction.js';

/* =========================
   GET MY WALLET
========================= */
export const getWallet = async (req, res) => {
  const wallet = await Wallet.findOne({ userId: req.user.id });

  if (!wallet) {
    return res.status(404).json({ message: 'Wallet not found' });
  }

  res.json(wallet);
};

/* =========================
   USER → DEPOSIT REQUEST
========================= */
export const requestDeposit = async (req, res) => {
  const { amount } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({ message: 'Invalid amount' });
  }

  const tx = await WalletTransaction.create({
    userId: req.user.id,
    type: 'CREDIT',
    amount,
    status: 'PENDING',
    description: 'Manual UPI deposit'
  });

  res.json({
    message: 'Deposit request submitted',
    tx
  });
};

/* =========================
   ADMIN → APPROVE DEPOSIT
========================= */
export const approveDeposit = async (req, res) => {
  const tx = await WalletTransaction.findById(req.params.id);

  if (!tx || tx.status !== 'PENDING') {
    return res.status(400).json({ message: 'Invalid transaction' });
  }

  const wallet = await Wallet.findOne({ userId: tx.userId });

  if (!wallet) {
    return res.status(404).json({ message: 'Wallet not found' });
  }

  wallet.balance += tx.amount;
  await wallet.save();

  tx.status = 'APPROVED';
  await tx.save();

  res.json({
    message: 'Deposit approved & wallet credited'
  });
};

/* =========================
   USER → TRANSACTIONS
========================= */
export const getTransactions = async (req, res) => {
  const txs = await WalletTransaction.find({ userId: req.user.id })
    .sort({ createdAt: -1 });

  res.json(txs);
};

/* =========================
   INTERNAL → DEDUCT WALLET
========================= */
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
