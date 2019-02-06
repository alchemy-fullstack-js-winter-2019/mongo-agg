const Chance = require('chance');
const chance = new Chance();
const Tweet = require('../lib/models/Tweet');
const User = require('../lib/models/User');

const seedData = () => {
  const tweets = [...Array(100)];
  const users = [{ email: 'teonna@heintz.com', password: 'Robert34980' }, { email: 'teonna@zaragoza.com', password: 'Robert34980' }, { email: 'teonna@maree.com', password: 'Robert34980' }];
  
  return Promise.all(users.map(user => User.create(user)))
    .then(users => {
      return Promise.all(
        tweets.map(() => {
          return Tweet.create({
            handle: chance.pickone(users)._id, 
            text: chance.sentence()
          });
        })
      );
    }); 
};

module.exports = seedData;
