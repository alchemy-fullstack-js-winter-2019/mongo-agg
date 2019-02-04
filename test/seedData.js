const Tweet = require('../lib/models/Tweet');
const Chance = require('chance');
const chance = new Chance();
const User = require('../lib/models/User');

const TOTAL_USERS = 20;
const TOTAL_TWEETS = 1000;

const seedData = () => {
  return Promise.all(
    [...Array(TOTAL_USERS)].map((ele, i) => {
      return User.create({
        email: `test${i}@test.com`,
        password: 'password'
      });
    })
  ).then(users => {
    return Promise.all(
      [...Array(TOTAL_TWEETS)].map(() => {
        return Tweet.create({
          handle: chance.pickone(users)._id,
          text: chance.sentence()
        });
      }));
  });
};

module.exports = { seedData };
