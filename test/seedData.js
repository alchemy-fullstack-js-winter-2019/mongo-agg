const Chance = require('chance');
const Tweet = require('../lib/models/Tweet');

const chance = new Chance();

const createTweets = () => {
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

module.exports = createTweets;
