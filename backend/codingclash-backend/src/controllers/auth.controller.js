import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { sendResetEmail } from '../utils/sendEmail.js';
import Wallet from '../models/Wallet.js';


/* =========================
   REGISTER
========================= */
export const register = async (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!phone) {
    return res.status(400).json({ message: 'Phone number required' });
  }

  const userExists = await User.findOne({
    $or: [{ email }, { phone }]
  });

  if (userExists) {
    return res.status(400).json({
      message: 'Email or phone already exists'
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  // ✅ CREATE USER
  const user = await User.create({
    name,
    email,
    phone,
    password: hashedPassword
  });

  // ✅ AUTO CREATE WALLET (PHASE 5 CORE)
  await Wallet.create({
    userId: user._id
  });

  return res.status(201).json({
    message: 'Registered successfully'
  });
};


/* =========================
   LOGIN (EMAIL OR PHONE)
========================= */
export const login = async (req, res) => {
  const { identifier, password } = req.body;

  const user = await User.findOne({
    $or: [{ email: identifier }, { phone: identifier }]
  });

  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  res.json({ token });
};

/* =========================
   WHO AM I
========================= */
export const getMe = async (req, res) => {
  res.json({
    id: req.user.id,
    role: req.user.role
  });
};

/* =========================
   FORGOT PASSWORD (EMAIL)
========================= */
export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  console.log('👉 FORGOT PASSWORD REQUEST:', email);

  const user = await User.findOne({ email });

  if (!user) {
    console.log('❌ USER NOT FOUND');
    return res.json({
      message: 'If account exists, reset email sent'
    });
  }

  const token = crypto.randomBytes(32).toString('hex');

  user.resetToken = token;
  user.resetTokenExpiry = Date.now() + 15 * 60 * 1000;
  await user.save();

  const resetLink = `http://localhost:4200/auth/reset-password/${token}`;

  console.log('✅ USER FOUND, SENDING MAIL');
  console.log('🔗 RESET LINK:', resetLink);

  await sendResetEmail(email, resetLink);

  console.log('📧 MAIL FUNCTION CALLED');

  return res.json({
    message: 'If account exists, reset email sent'
  });
};


/* =========================
   RESET PASSWORD
========================= */
export const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  const user = await User.findOne({
    resetToken: token,
    resetTokenExpiry: { $gt: Date.now() }
  });

  if (!user) {
    return res.status(400).json({ message: 'Invalid or expired link' });
  }

  user.password = await bcrypt.hash(newPassword, 10);
  user.resetToken = null;
  user.resetTokenExpiry = null;

  await user.save();

  res.json({ message: 'Password reset successful' });
};
