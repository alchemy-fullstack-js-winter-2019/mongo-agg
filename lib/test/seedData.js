describe( 'seed Data Tests',  () => {
  beforeEach(done => {
    return mongoose.connection.dropDatabase(() => {
      done();
    });
  });
  afterAll((done) => {
    mongoose.connection.close(done);
  });
})