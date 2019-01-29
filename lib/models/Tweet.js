const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  handle: String,
  text: String
});

module.exports = mongoose.model('Tweet', tweetSchema);

// handle: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: 'User',
//   required: true
// },
