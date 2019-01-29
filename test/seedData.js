const Chance = require('chance');
const chance = new Chance();
const Tweet = require('../lib/models/Tweet');
// const User = require('../lib/models/User');

// const users = [{ email: 'test@test.com', password: 'password' }];
const arr = [...Array(100)];
const seedData = () => {
  
  return Promise.all(
    arr.map(() => {
      return Tweet.create({ 
        handle: chance.name(), 
        text: chance.sentence() 
      });
    })
  );
};

module.exports = seedData;

console.log(seedData());
