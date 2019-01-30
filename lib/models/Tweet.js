const mongoose = require('mongoose'); 

const tweetSchema = new mongoose.Schema({
  handle: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    require: true
  },
  text: {
    type: String,
    require: true,
  }
});

module.exports = mongoose.model('Tweet', tweetSchema);
