const Tweet = require('../lib/models/Tweet');
const Chance = require('chance');
const chance = new Chance();
const User = require('../lib/models/User');

const seedData = () => {
  return Promise.all(
    [...Array(5)].map((ele, i) => {
      return User.create({
        email: `test${i}@test.com`,
        password: 'password'
      });
    })
  ).then(users => {
    return Promise.all(
      [...Array(100)].map(() => {
        return Tweet.create({
          handle: chance.pickone(users),
          text: chance.sentence()
        });
      }));
  });
};

module.exports = { seedData };
