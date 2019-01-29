require('dotenv').config();
require('./lib/utils/connect')();
const { seedData } = require('./test/seedData');
// const mongoose = require('mongoose');

seedData();

console.log('done');

// mongoose.connect.db.dropDatabase();
