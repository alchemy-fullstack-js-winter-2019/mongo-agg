require('dotenv').config();
require('./utils/connect')();
const seedData = require('./test/seedData');

seedData();

console.log('done');
