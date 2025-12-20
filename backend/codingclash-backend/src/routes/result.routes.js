import express from 'express';
import {
  completeContest,
  getResults
} from '../controllers/result.controller.js';

import { protect } from '../middleware/auth.middleware.js';
import { adminOnly } from '../middleware/admin.middleware.js';

const router = express.Router();

// ADMIN
router.post('/complete/:id', protect, adminOnly, completeContest);

// USER
router.get('/:id', protect, getResults);

export default router;
