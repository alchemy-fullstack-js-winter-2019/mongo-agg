const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  handle: { 
    type: mongoose.Schema.Types.ObjectId, ref: 'User', 
    required: true },
  text: { type: String }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
