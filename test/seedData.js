const Chance = require('chance');
const chance = new Chance();
const Tweet = require('../lib/models/Tweet');

module.exports = () => {
  return Promise.all([...Array(100)].map(() => Tweet.create({ handle: chance.name(), text: chance.sentence() })));
};

