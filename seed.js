require('dotenv').config();
require('./lib/utils/connect')();
const { seedData, users } = require('./test/seedData');

seedData();
users();

console.log('done');
