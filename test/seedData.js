const Chance = require('chance');
const User = require('../lib/models/User');
const Tweet = require('../lib/models/Tweet');
const chance = new Chance();

module.exports = () => {
  return Promise.all(
    [...Array(10)].map((ele, i) => User.create({ email: `test${i}@test.com`, password: 'password' }))
  )
    .then(users => {
      return Promise.all([...Array(100)].map(() => Tweet.create({ handle: chance.pickone(users)._id, text: chance.sentence() }))); //for each item in the array create a new tweet   

    });  


};





