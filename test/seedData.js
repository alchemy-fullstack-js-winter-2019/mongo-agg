const Chance = require('chance');
const chance = new Chance();
const Tweet = require('../lib/models/Tweet');
const User = require('../lib/models/User');

const seedData = () => {
    const users = [...Array(5)];

    const arr = [...Array(100)];
    return Promise.all(
        users.map((n, i) => {
            return User.create({
                email: `${i}happy@gmail.com`, password: 'password1'
            });
        }),
        arr.map(() => {
            return Tweet.create({ 
                handle: chance.name(),
                text: chance.sentence()
            });
        }),
    );
};
module.exports = seedData; 
