const Tweet = require('../lib/models/Tweet');
const User = require('../lib/models/User');
const Chance = require('chance');
const chance = new Chance();

const TOTAL_USERS = 10;
const TOTAL_TWEETS = 10;

module.exports = () => {
  return Promise.all(
    [...Array(TOTAL_USERS)].map((ele, i) => User.create({ email: `test${i}@test.com` }))
  )
    .then(users => {
      console.log('users', users);
      return Promise.all(
        [...Array(TOTAL_TWEETS)].map(() => Tweet.create(
          { 
            handle: chance.pickone(users)._id, 
            text: chance.sentence() 
          }))
      );
    });
};


