'use strict';
const expect = require('chai').expect;

describe('models unit testing', () => {

  const models = require(__dirname+'/../../models')(),
    operators = models.operators,
    Calculation = models.Calculation;

  describe('operators testing', () => {

    it('valid addition object', () => {
      let add = operators['+'];
      expect(add.symb).eql('+');
      expect(add.name).eql('add');
      expect(add.fn(3, 4)).eql(7);
    })

    it('valid subraction object', () => {
      let sub = operators['-'];
      expect(sub.symb).eql('-');
      expect(sub.name).eql('sub');
      expect(sub.fn(3, 4)).eql(-1);
    })

    it('valid multiplication object', () => {
      let mult = operators['*'];
      expect(mult.symb).eql('*');
      expect(mult.name).eql('mult');
      expect(mult.fn(3, 4)).eql(12);
    })

    it('valid division object', () => {
      let div = operators['/'];
      expect(div.symb).eql('/');
      expect(div.name).eql('div');
      expect(div.fn(15, -3)).eql(-5);
    })


  });


  describe('Calculation model testing', () => {
    it('5 + 3 = 8', () => {
      expect(new Calculation({operator: operators['+'], operand1: 5, operand2:3}).apply()).eql(8);
    })

    it('2 - 7.3 = -5.3', () => {
      expect(new Calculation({operator: operators['-'], operand1: 2, operand2:7.3}).apply()).eql(-5.3);
    })

    it('-7 * 5 = -35', () => {
      expect(new Calculation({operator: operators['*'], operand1: -7, operand2:5}).apply()).eql(-35);
    })

    it('6 / 3 = 2', () => {
      expect(new Calculation({operator: operators['/'], operand1: 6, operand2:3}).apply()).eql(2);
    })

    it('division by 0', () => {
      expect(new Calculation({operator: operators['/'], operand1: 6, operand2:0}).apply()).eql(Infinity);
    })
  })

})
