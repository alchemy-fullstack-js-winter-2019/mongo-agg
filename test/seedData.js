const Chance = require('chance');
const chance = new Chance();
const Tweet = require('../lib/models/Tweet');

module.exports = () => {
  return Promise.all(
    [...Array(100)].map(() => {
      const handle = chance.name();
      const text = chance.sentence({ words: 5 });
        return Tweet.create({ handle, text });
    }));
};
