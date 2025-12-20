import express from 'express';
import {
  getWallet,
  requestDeposit,
  approveDeposit,
  getTransactions
} from '../controllers/wallet.controller.js';

import { protect } from '../middleware/auth.middleware.js';
import { adminOnly } from '../middleware/admin.middleware.js';

const router = express.Router();

router.get('/', protect, getWallet);
router.post('/deposit', protect, requestDeposit);
router.get('/transactions', protect, getTransactions);

// ADMIN
router.post('/approve/:id', protect, adminOnly, approveDeposit);

export default router;
