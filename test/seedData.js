const Tweet = require('../lib/models/Tweet');
const Chance = require('chance');
const chance = new Chance();
const User = require('../lib/models/User');

const seedData = () => {
  const arr = [...Array(100)];
  return Promise.all(
    arr.map(() => {
      return Tweet.create({
        handle: chance.name(),
        text: chance.sentence()
      });
    })
  );
};

const users = () => {
  return Promise.all(
    [...Array(5)].map(() => {
      return User.create({
        email: 'test@test.com',
        password: 'password'
      });
    })
  );
};
  

module.exports = { seedData, users };
