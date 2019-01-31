const Tweet = require('../lib/model/Tweet');
const User = require('../lib/model/User');
const Chance = require('chance');
const chance = new Chance();

const TOTAL_USERS = 10;
const TOTAL_TWEETS = 100;

module.exports = () => {
  return Promise.all(
    [...Array(TOTAL_USERS)].map((ele, i) => User.create({ email: `test${i}@test.com` }))
  )
    .then(users => {
      return Promise.all(
        [...Array(TOTAL_TWEETS)].map(() => {
          return Tweet.create({
            handle: chance.pickone(users)._id,
            text: chance.sentence()
          });
        })
      );
      });
    };

    //Robo 3T 
    //Groups Tweets by user:
    // db.tweeets/aggregate([
    //   ($group: ( _id: '$handle', twwets: { $addToSet: '$tex' }))
    // ])
    
    
    // db.tweets.aggregate([ { $group: {_id: '$handle', tweets: {$lookup: '$text'} } }])
    
    // { $project: { lenght: {$strlenCP: '$text' }}},
    // {$group: {_id: null, tweetsLenght: {}}}

    