var Chance = require('chance');
const Tweet = require('../lib/models/Tweet');
var chance = new Chance();
const User = require('../lib/models/User');

// Instantiate Chance so it can be used
const seedData = () => {
    const arr = [...Array(100)];

    // const users = [{ email: 'test@test.com', password: 'password' }];
    const userArr = [...Array(5)];

    return Promise.all(
        userArr.map((ele, i) => {
            return User.create({
                email: `test${i}@test.com`, password: 'password' });
        }))
        .then(users => {
            return Promise.all(
                arr.map(() => {
                    return Tweet.create({ 
                        handle: chance.pickone(users)._id,
                        text: chance.sentence()
                    });
                })
            );
        });
};

module.exports = seedData;