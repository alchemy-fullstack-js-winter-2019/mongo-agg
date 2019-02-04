const bcrypt = require('bcryptjs');
const { hash, compare } = require('../../lib/utils/hash');

describe('hashing functions', () => {
  it('hashes a password', () => {
    return bcrypt.hash('password', 10)
      .then(hashedPassword => {
        expect(hashedPassword).toBeDefined();
      });
  });

  it('creates hashed passwords that are different', () => {
    const password = 'password';
    return bcrypt.hash(password, 10)
      .then(hashedPassword1 => {
        return Promise.all([
          Promise.resolve(hashedPassword1),
          bcrypt.hash(password, 10)
        ]);
      })
      .then(([hash1, hash2]) => {
        expect(hash1).not.toEqual(hash2);
      });
  });


});
