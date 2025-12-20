import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import walletRoutes from './routes/wallet.routes.js';
import contestRoutes from './routes/contest.routes.js';
import resultRoutes from './routes/result.routes.js';

dotenv.config();

// DB connect
connectDB();

// INIT APP (⚠️ THIS MUST COME BEFORE app.use)
const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES (⚠️ AFTER app INIT ONLY)
app.use('/api/auth', authRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/contests', contestRoutes);
app.use('/api/results', resultRoutes);



// TEST
app.get('/', (req, res) => {
  res.send('CodingClash API running');
});

// START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
