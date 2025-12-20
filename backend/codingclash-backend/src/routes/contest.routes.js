import express from 'express';
import {
  createContest,
  getContests,
  joinContest
} from '../controllers/contest.controller.js';

import { protect } from '../middleware/auth.middleware.js';
import { adminOnly } from '../middleware/admin.middleware.js';

const router = express.Router();

// ADMIN
router.post('/', protect, adminOnly, createContest);

// USER
router.get('/', protect, getContests);
router.post('/join/:id', protect, joinContest);

export default router;
