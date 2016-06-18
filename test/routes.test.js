'use strict';
const chai = require('chai'),
  config = require(__dirname+'/../config');
chai.use(require('chai-http'));

const expect = chai.expect,
  request = chai.request;

describe('routes testing', () => {

  // require(__dirname+'/../server');
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

  describe('calculate routes testing', () => {

    const path = '/calculate';

    it('post calculate 3 + 2', (done) => {
      request(server)
        .post(path)
        .send({"operator": "+", "operand1": 3, "operand2": 2})
        .end((err, res) => {
          expect(err).eql(null);
          expect(res.body.msg).eql('3 + 2 calculated');
          expect(res.body.data).eql(5);
          done();
        })
    })

    it('post calculate 4 - 7', (done) => {
      request(server)
        .post(path)
        .send({"operator": "-", "operand1": 4, "operand2": 7})
        .end((err, res) => {
          expect(err).eql(null);
          expect(res.body.msg).eql('4 - 7 calculated');
          expect(res.body.data).eql(-3);
          done();
        })
    })

    it('post calculate 4 * 7', (done) => {
      request(server)
        .post(path)
        .send({"operator": "*", "operand1": 4, "operand2": 7})
        .end((err, res) => {
          expect(err).eql(null);
          expect(res.body.msg).eql('4 * 7 calculated');
          expect(res.body.data).eql(28);
          done();
        })
    })


  })

})
