import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
  contestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contest'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  rank: Number,
  prize: Number
}, { timestamps: true });

export default mongoose.model('Result', resultSchema);
