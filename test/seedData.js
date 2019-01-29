const Chance = require('chance');
const Tweet = require('../lib/models/Tweet');
const User = require('../lib/models/User');
const chance = new Chance();

const createTweets = () => {
  const usersArr = [...Array(5)];
  const arr = [...Array(100)];
  return Promise.all(
    usersArr.map(() => {
      return User.create(
        [{ email: 'test@test.com', password: 'password' }]);
    }),
    arr.map(() => {
      return Tweet.create({
        handle: chance.name(),
        text: chance.sentence()
      });
    })
  );
};

module.exports = createTweets;
