const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new mongoose.Schema({
  handle: {
    type: Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  },
  text: {
    type: String,
    required: true,
    maxlength: 281
  }
});

module.exports = mongoose.model('Tweet', tweetSchema);
