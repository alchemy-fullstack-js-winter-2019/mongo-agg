const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email required'],
    unique: true
  }, 
  passwordHash: String
}, {
  toJSON: {
    transform: function(doc, ret) {
      delete ret.__v,
      delete ret.passwordHash;
    }
  }
});
const User = mongoose.model('User', userSchema);
module.exports = User;
