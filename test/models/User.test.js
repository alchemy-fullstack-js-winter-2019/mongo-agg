require('../dataHelpers');
const mongoose = require('mongoose');
const { Types } = require('mongoose');
const User = require('../../lib/models/User');
const { tokenize, untokenize } = require('../../lib/utils/token');

describe('User model', () => {
  it('validates a good model', () => {
    const user = new User({ username: 'test' });
    expect(user.toJSON()).toEqual({ username: 'test', _id: expect.any(Types.ObjectId) });
  });

  it('has a required username', () => {
    const user = new User({});
    const errors = user.validateSync().errors;
    expect(errors.username.message).toEqual('Username required');
  });

  it('stores a _tempPassword', () => {
    const user = new User({
      username: 'abelq16',
      password: 'password'
    });
    expect(user._tempPassword).toEqual('p455w0rd');
  });

  it('has a passwordHash', () => {
    return User.create({
      username: 'abelq16',
      password: 'password'
    })
      .then(user => {
        expect(user.passwordHash).toEqual(expect.any(String));
        expect(user.password).toBeUndefined();
      });
  });

  it('can compare good passwords', () => {
    return User.create({
      username: 'test',
      password: 'password'
    })
      .then(user => {
        return user.compare('password');
      })
      .then(result => {
        expect(result).toBeTruthy();
      });
  });

});
