require('dotenv').config();
require('./lib/utils/connect')();
const seedData = require('./test/seedData');
const mongoose = require('mongoose');

seedData()
  // eslint-disable-next-line no-console
  .then(() => console.log('done')
    .finally(() => mongoose.connection.close()));

