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

  it.skip('validates a good model', () => {
    const tweet = new Tweet({ handle: 'booboo3000', text: 'hi hi hi' });
    expect(tweet.toJSON()).toEqual({
      _id: expect.any(Types.ObjectId),
      handle: 'booboo3000',
      text: 'hi hi hi'
    });
  });

  it('has required handle and text fields', () => {
    const tweet = new Tweet({});
    const errors = tweet.validateSync().errors;
    expect(errors).toBeDefined();
    expect(errors.handle['message']).toEqual('Path `handle` is required.');
    expect(errors.text['message']).toEqual('Path `text` is required.');
  });

});
