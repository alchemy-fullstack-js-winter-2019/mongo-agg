require('dotenv').config();
require('./lib/utils/connect')();
const { 
  // tweetSeeds,
  // userSeeds,
  userTweetSeeds
} = require('./test/seedData.js');

userTweetSeeds();
// userSeeds();
// tweetSeeds();
console.log('done'); // eslint-disable-line no-console
