const Tweet = requre('../lib/model/Tweet');
const User = require('../lib/models/User');
const Chance = require('chance');
const chance = new Chance();

const TOTAL_USERS = 10;
const TOTAL_TWEETS = 1000;

module.exports = () => {
  return Promise.all(
  [ ...Array(TOTAL_TWEETS)].map(() => {
      return Tweet.create({
        handle: chance.pickone(users)._id,
        text:chance.sentence()
      });
    })
    );
}


