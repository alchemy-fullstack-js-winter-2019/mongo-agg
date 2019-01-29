require('dotenv').config();
require('../../lib/utils/connect')();
const mongoose = require('mongoose');
const { Types } = require('mongoose');
const Tweet = require('../../lib/models/Tweet');


describe('Tweet', () => {
  beforeEach(done => {
    return mongoose.connection.dropDatabase(() => {
      done();
    });
  });
  afterAll(done => {
    mongoose.connection.close();
    done();
  });

  it('validates a good model', () => {
    const user = new Tweet({ handle: 'booboo3000', text: 'hi hi hi' });
    expect(user.toJSON()).toEqual({
      _id: expect.any(Types.ObjectId),
      handle: 'booboo3000',
      text: 'hi hi hi'
    });
  });

  it('has required handle and text fields', () => {
    const user = new Tweet({});
    const errors = user.validateSync().errors;
    expect(errors).toBeDefined();
    expect(errors.handle['message']).toEqual('Path `handle` is required.');
    expect(errors.text['message']).toEqual('Path `text` is required.');
  });

});
