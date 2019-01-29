require('dotenv').config();
require('./lib/utils/connect');
const seedData = require('./test/seedData.js');

seedData();

console.log('done');
