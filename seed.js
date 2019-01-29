require('dotenv').config();
require('./lib/utils/connect')();
const { 
  tweetSeeds,
  userSeeds
} = require('./test/seedData.js');

userSeeds();
tweetSeeds();
console.log('done'); // eslint-disable-line no-console
