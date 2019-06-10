import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);
chai.should();

//Figure out how to import sequelize db into test file
//Figure out how to seed db each test run

describe('routes', () => {
  describe('/api', () => {
    it('should return a status message if successful', done => {
      chai
        .request(app)
        .get('/api')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.message.should.equal(
            'Welcome to the Palette Picker v2 API!'
          );
          done();
        });
    });
  });
});
