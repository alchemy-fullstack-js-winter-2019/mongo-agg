const Chance = require('chance');
const Tweet = require('../lib/models/Tweet');

const chance = new Chance();

module.exports = () => {
  return Promise.all([...Array(100)].map(() => {
    return Tweet.create({
      handle: chance.name(),
      text: chance.sentence()
    });
  }));

};
