const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  handle: {
    type: mongoose.Types.ObjectId,
    required: [true, 'Email required'],
  },
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Tweet', tweetSchema);
