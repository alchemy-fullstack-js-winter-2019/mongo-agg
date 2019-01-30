const Chance = require('chance');
const chance = new Chance();
const Tweet = require('../lib/models/Tweet');
const User = require('../lib/models/User');

module.exports = () => {
  return Promise.all(
    [...Array(5)].map(() => {
      const email = chance.email();
      const password = chance.hash({ length: 15 });

      return User.create({ email, password });
    })
  )
  .then(users => {
    return Promise.all([...Array(100)].map(() => {
      const text = chance.sentence({ words: 5 });

      return Tweet.create({ handle: chance.pickone(users)._id, text });
    }));
  })
};
