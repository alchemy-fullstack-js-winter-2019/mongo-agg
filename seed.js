require('dotenv').config();
require('./lib/utils/connect')();
const seedData = require('./test/seedData');

seedData();
console.log('Done');