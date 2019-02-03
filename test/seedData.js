const Tweet = require('../lib/models/Tweet');
const User = require('../lib/models/User');
const Chance = require('chance');
const chance = new Chance();

const users = [...Array(5)];
const arr = [...Array(100)];

const createTweets = () => {
  return Promise.all(
    users.map((el, index) => {
      return User.create({ email: `seed${i}@test.com`,
        password: 'password' });
    })
  )
    .then(users => {
      return Promise.all(
        arr.map(() => {
          Tweet.create({
            handle: chance.pickone(users)._id,
            text: chance.sentence() });
        })
      );
    });
};
    
module.exports = createTweets;
