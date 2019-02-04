const Chance = require('chance');
const Tweet = require('../lib/models/Tweet');
const User = require('../lib/models/User');
const chance = new Chance();


const TOTAL_USERS = 10;
const TOTAL_TWEETS = 100;

module.exports = () => {
  return Promise.all(
    [...Array(TOTAL_USERS)].map((ele, i) => User.create({ email: `test${i}@test.com` }))
  )
    .then(users => {
      return Promise.all(
        [...Array(TOTAL_TWEETS)].map(() => {
          return Tweet.create({
            handle: chance.pickone(users)._id,
            text: chance.sentence()
          });
        })
      );
    });
};
