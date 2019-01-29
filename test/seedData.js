const Tweet = require('../lib/models/Tweet');
const User = require('../lib/models/User');
const Chance = require('chance');
const chance = new Chance();

const TOTAL_USERS = 10;
const TOTAL_TWEETS = 1000;

module.exports = () => {
  return Promise.all(
    [...Array(TOTAL_USERS)].map((ele, i) => User.create({ email: `test${i}@test.com` }))
  )
    .then(() => {
      return Promise.all(
        [...Array(TOTAL_TWEETS)].map(() => {
          return Tweet.create({
            handle: chance.name(),
            text: chance.sentence()
          });
        })
      );
    });
};
