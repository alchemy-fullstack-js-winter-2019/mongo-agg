const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const tweetSchema = new mongoose.Schema({
  handle: { 
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  text: { type: String }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
