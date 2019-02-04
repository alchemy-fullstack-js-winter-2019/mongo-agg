const { getPost, getToken } = require('./dataHelpers');
const request = require('supertest');
const app = require('../lib/app');

describe('post routes', () => {
  it('can create a new post', () => {
    return request(app)
      .post('/posts')
      .set('Authorization', `Bearer ${getToken()}`)
      .send({
        photoUrl: 'someUrl',
        caption: 'hola gente',
        tags: ['hi']
      })
      .then(res => {
        expect(res.body).toEqual({
          photoUrl: 'someUrl',
          caption: 'hola gente',
          tags: ['hi'],
          _id: expect.any(String),
          user: expect.any(String),
          __v: 0

        });
      });
  });

  it('gets a list of posts', () => {
    return request(app)
      .get('/posts')
      .then(res => {
        expect(res.body).toHaveLength(5);
      });
  });

  
});
