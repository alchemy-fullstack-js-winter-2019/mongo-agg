const { getUser, getToken } = require('./dataHelpers');
const request = require('supertest');

const app = require('../lib/app');

describe('app', () => {
  it('can sign up a user', () => {
    return request(app)
      .post('/auth/signup')
      .send({ username: 'test', password: 'password' })
      .then(res => {
        expect(res.body).toEqual({
          user: {
            _id: expect.any(String),
            username: 'test'
          },
          token: expect.any(String)
        });
      });
  });

  it('can sign in a user', () => {
    return getUser({ username: 'seed1' })
      .then(user => {
        return request(app)
          .post('/auth/signin')
          .send({
            username: user.username,
            password: 'password'
          });
      })
      .then(res => {
        expect(res.body).toEqual({
          user: {
            username: 'seed1',
            _id: expect.any(String)
          },
          token: expect.any(String)
        });
      });
  });

  it('can not sign in a user with bad password', () => {
    return getUser({ username: 'seed1' })
      .then(() => {
        return request(app)
          .post('/auth/signin')
          .send({
            username: 'seed1',
            password: 'badPassword'
          });
      })
      .then(res => {
        expect(res.status).toEqual(401);
      });
  });

  it('can not /signin a user with bad username', () => {
    return request(app)
      .post('/auth/signin')
      .send({
        username: 'badUsername',
        password: 'password'
      })
      .then(res => {
        expect(res.status).toEqual(401);
      });
  });

  it('has a /verify route', () => {
    return request(app)
      .get('/auth/verify')
      .set('Authorization', `Bearer ${getToken()}`)
      .then(res => {
        expect(res.body).toEqual({
          username: 'seed1',
          _id: expect.any(String)
        });
      });
  });

});
