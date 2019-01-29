const Chance = require('chance');
const chance = new Chance();
const Tweet = require('../lib/models/Tweet');
const User = require('../lib/models/User');




module.exports = () => {

  return Promise.all(
    [...Array(5)].map(() => User.create({ email: 'test@test.com' }))
  )
    .then(users => {
      return Promise.all(
        [...Array(100)].map(() => Tweet.create({ handle: chance.pickone([users._id]),
          text: chance.sentence() 
        })
        ));

    });



};
