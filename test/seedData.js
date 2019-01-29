const Chance = require('chance');
const chance = new Chance();
const Tweet = require('../lib/models/Tweet');

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

module.exports = seedData;
