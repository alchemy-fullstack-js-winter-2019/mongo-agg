const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    maxlength: 280
  }
});

module.exports = mongoose.model('User', userSchema);
