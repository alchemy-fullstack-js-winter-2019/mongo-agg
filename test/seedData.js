const Chance = require('chance');
const chance = new Chance();
const Tweet = require('../lib/models/Tweet');
const User = require('../lib/models/User');
const mongoose = require('mongoose');

const users = [...Array(5)];
const arr = [...Array(100)];

mongoose.connection.dropDatabase();

const seedData = () => {
  return Promise.all(
    users.map(() => {
      return User.create(
        [{ email: 'test1@test.com', password: 'password' }]);
    }),
    arr.map(() => {
      return Tweet.create({ 
        handle: chance.name(), 
        text: chance.sentence() 
      });
    })
  );
};

module.exports = seedData;
