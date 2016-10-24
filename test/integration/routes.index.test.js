process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../src/server/app');
const knex = require('../../src/server/db/connection');

describe('routes : index', () => {

  beforeEach(() => {
   return knex.migrate.rollback()
   .then(() => { return knex.migrate.latest(); })
   .then(() => { return knex.seed.run(); });
 });

  afterEach((done) => { done(); });

  describe('GET /', () => {
    it('should render the sum', (done) => {
      chai.request(server)
      .get('/')
      .end((err, res) => {
        res.redirects.length.should.equal(0);
        res.status.should.eql(200);
        res.type.should.eql('application/json');
        res.body.should.eql({ sum: 3 });
        res.body.sum.should.eql(3);
        done();
      });
    });
  });

  describe('GET /coffee', () => {
    it('should render a success', (done) => {
      chai.request(server)
      .get('/coffee')
      .end((err, res) => {
        return knex('coffeee').where('id', 1).first()
        .then((coffee) => {
          res.redirects.length.should.equal(0);
          res.status.should.eql(200);
          res.type.should.eql('application/json');
          // res.body.should.contain.keys('status', 'data');
          // res.body.status.should.eql('success');
          res.body.should.be.a('array');
          res.body.length.should.eql(5);
          res.body[0].id.should.eql(coffee.id);
          done();
        });
      });
    });
  });


});
