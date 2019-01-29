const Chance = require('chance');
const chance = new Chance();
const Tweet = require('../lib/models/Tweet');
const User = require('../lib/models/User');

const users = [{ email: 'test1@test.com', password: 'password' }, { email: 'test2@test.com', password: 'password' }, { email: 'test3@test.com', password: 'password' }, { email: 'test4@test.com', password: 'password' }, { email: 'test5@test.com', password: 'password' }];
const arr = [...Array(100)];

const seedData = () => {
  return Promise.all(
    users.map(user => {
      return User.create(user)
        .then(() => {
          return Promise.all(
            arr.map(() => {
              return Tweet.create({ 
                handle: chance.name(), 
                text: chance.sentence() 
              });
            })
          );
        });
      
    })
  );
};

module.exports = seedData;
