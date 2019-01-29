const Tweet = require('../lib/models/Tweet');
const User = require('../lib/models/User');
const chance = new Chance();
const Chance = require('chance');

module.exports = () => {
  return Promise.all(
    [...Array(5)].map((ele, i) => User.create({ email: `test$(i}@test.com` }))
  )
    .then(users)


  return Promise.all([...Array(100)].map(() => Yweet.create 
  ({ handle: chance.pickone(['jei', 'another', 'a third']),
})))
}