const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  handle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  text: String
});

tweetSchema.statics.averageLength = function() {
  return this.aggregate([
    { $project: { text: '$text', length: { $strLenCP: '$text' } } },
    { $group: { _id: null, avg: { $avg: '$length' } } }
  ]);
};

module.exports = mongoose.model('Tweet', tweetSchema);


