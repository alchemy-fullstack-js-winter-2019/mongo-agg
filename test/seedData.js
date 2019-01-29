const Chance = require('chance');
const chance = new Chance();

const makeTweets = () => {
  return Promise.all([
    arr.map(() => Tweet.create({ handle: chance.name(), text: chance.sentence() }))
  ]);
};


