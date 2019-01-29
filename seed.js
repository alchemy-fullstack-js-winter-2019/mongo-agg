const seedData = require('./test/seedData.js');
require('dotenv').config();
require('./lib/utils/connect')();

seedData();

console.log('done');

