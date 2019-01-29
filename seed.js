require('dotenv').config();
require('./lib/utils/connect')();
const { 
  // tweetSeeds,
  // userSeeds,
  userTweetSeeds
} = require('./test/seedData.js');
const mongoose = require('mongoose');

userTweetSeeds()
// userSeeds();
// tweetSeeds();
// eslint-disable-next-line no-console
  .then(() => console.log('done'))
  .finally(() => mongoose.connection.close());
