const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  handle: { type: String },
  text: { type: String }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
