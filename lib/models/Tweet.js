const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  handle: {
    type: String
  },
  text: {
    type: String
  }
});

module.exports = mongoose.model('Tweet', tweetSchema);
