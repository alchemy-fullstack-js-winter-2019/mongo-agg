require('dotenv').config();
require('./lib/utils/connect')();
const seedData = require('./test/seedData');

seedData()
  .then(() => {
    console.log('done');
  });
