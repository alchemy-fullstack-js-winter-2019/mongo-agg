const Tweet = require('../lib/models/Tweet');
const Chance = require('chance');
const chance = new Chance();
const User = require('../lib/models/User');

const seedData = () => {
  return Promise.all(
    [...Array(5)].map((ele, index) => {
      return User.create({
        email: `test${index}@test.com`,
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
