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


});
