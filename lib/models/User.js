
const mongoose = require('mongoose');
// const { hashFunction, compareFunction } = require('../utils/hash');
// const { tokenized, untokenized } = require('../../lib/utils/token');


const userSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true
    },
    passwordHash: {
        type: String, 
        required: false
    },
});
// userSchema.virtual('password').set(function(password) {
//     this._tempPassword = password;
// });
// userSchema.pre('save', function(next) {
//     hashFunction(this._tempPassword)
//         .then(hashed => {
//             this.passwordHash = hashed;
//             next();
//         });
// });

// userSchema.methods.compare = function(p) {
//     return compareFunction(p, this.passwordHash);
// };
// userSchema.methods.authToken = function() {
//     return tokenized(this.toJSON());
// };
// userSchema.statics.findByToken = function(token) {
//     return Promise.resolve(untokenized(token));
// };


const User = mongoose.model('User', userSchema);
module.exports = User;