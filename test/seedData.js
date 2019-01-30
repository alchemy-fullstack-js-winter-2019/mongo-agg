const Chance = require('chance');
const chance = new Chance();
const Tweet = require('../lib/models/Tweet');
const User = require('../lib/models/User');
// const mongoose = require('mongoose');

const users = [...Array(10)];
const arr = [...Array(1000)];

// mongoose.connection.dropDatabase();

const seedData = () => {
  return Promise.all(
    users.map((el, index) => {
      return User.create(
        { email: `test${index}@test.com`, password: 'password' });
    })
  )
    .then(users => {
      return Promise.all(
        arr.map(() => {
          Tweet.create({ handle: chance.pickone(users)._id, text: chance.sentence() });
        })
      );
    });
};



module.exports = seedData;
