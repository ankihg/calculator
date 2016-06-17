'use strict';
const chai = require('chai'),
  config = require(__dirname+'/../config');
chai.use(require('chai-http'));

const expect = chai.expect,
  request = chai.request;

describe('routes testing', () => {

  require(__dirname+'/../server');
  const server = 'localhost:'+config.PORT;

  describe('operators routes testing', () => {

    const path = '/operators';

    it('get all', (done) => {
      request(server)
        .get(path)
        .end((err, res) => {
          expect(err).eql(null);
          expect(res.body.msg).eql('all operators');
          const operators = res.body.data;
          expect(operators['+'].name).eql('add');
          expect(operators['-'].symb).eql('-');
          expect(operators['*'].name).eql('mult');
          expect(operators['/'].symb).eql('/');
          done();
        })
    })

  })

})
