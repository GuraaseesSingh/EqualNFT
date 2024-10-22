const mongoose = require('mongoose');

const RewardSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
    trim: true,
  },
  reward: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Reward = mongoose.model('Reward', RewardSchema);
module.exports = Reward;
