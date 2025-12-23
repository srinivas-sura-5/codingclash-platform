import express from 'express';
import {
  register,
  login,
  getMe,
  forgotPassword,
  resetPassword
} from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', getMe);

router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword); // 🔥 MISSING FIX

export default router;
