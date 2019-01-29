const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = Schema({
  handle: { 
    type: 'String', 
    required: true
  },
  text: {
    type: String,
    maxlength: 281,
    required: true
  }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
