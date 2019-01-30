require('dotenv').config();
require('./lib/utils/connect')();
const mongoose = require('mongoose');
const seedData = require('./test/seedData');

seedData()
// eslint-disable-next-line
  .then(() => console.log('done'))
  .finally(() => mongoose.connection.close());
