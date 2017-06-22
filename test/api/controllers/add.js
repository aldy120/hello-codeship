var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

  describe('add', function() {

    describe('GET /add', function() {

      it('should return zero', function(done) {

        request(server)
          .get('/add')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql('0');

            done();
          });
      });
      it('should return 100', function(done) {

        request(server)
          .get('/add')
          .query({a: 10, b: 90})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql('100');

            done();
          });
      });

      it('should return 0 for input not number', function(done) {

        request(server)
          .get('/add')
          .query({a: 'x', b: 90})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(400)
          .end(function(err, res) {
            done();
          });
      });
    });

  });

});
