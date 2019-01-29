const Chance = require('chance');
const Tweet = require('../lib/models/Tweet');
const User = require('../lib/models/User');

const chance = new Chance();

const userSeeds = () => {
  const users = [{ email: 'test@test.com', password: 'password' }];
  return Promise.all([...Array(5)].map(() => {
    return User.create(users);
  }));
};

const tweetSeeds = () => {
  return Promise.all([...Array(100)].map(() => {
    return Tweet.create({
      handle: chance.name(),
      text: chance.sentence()
    });
  }));
};

const userTweetSeeds = () => {
  return Promise.all([...Array(5)].map((el, idx) => {
    return User.create({
      email: `test${idx}@test.com`,
      password: 'password'
    });
  }))
    .then(users => {
      return Promise.all([...Array(100)].map(() => {
        return Tweet.create({
          handle: chance.pickone(users)._id,
          text: chance.sentence()
        });
      }));
    });
};


module.exports = {
  tweetSeeds,
  userSeeds,
  userTweetSeeds
};
