import mongoose from 'mongoose';

const contestSchema = new mongoose.Schema({
  name: String,
  entryFee: Number,
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  minParticipants: {
    type: Number,
    default: 10
  },
  state: {
    type: String,
    enum: ['UPCOMING', 'WAITING', 'LOCKED', 'LIVE', 'COMPLETED'],
    default: 'WAITING'
  },
  prizePool: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

export default mongoose.model('Contest', contestSchema);
