require('dotenv').config();
require('./lib/utils/connect')();
const mongoogse = require('mongoose');
const seedData = require('./test/seedData');

seedData()
  .then(() => {
    console.log('done');
  })
  .finally(() => mongoogse.connection.close());
  

