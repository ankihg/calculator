'use strict';
const expect = require('chai').expect;

describe('calculation model unit testing', () => {

  const models = {};
  require(__dirname+'/../models')(models);

  const  operators = models.operators,
    Calculation = models.Calculation;

  it('add 5 and 3', () => {
    expect(new Calculation(operators['+'], 5, 3).apply()).eql(8);
  })

  it('sub 5 and 3', () => {
    expect(new Calculation(operators['-'], 5, 3).apply()).eql(2);
  })

  it('mult 5 and 3', () => {
    expect(new Calculation(operators['*'], 5, 3).apply()).eql(15);
  })

  it('divide 6 and 3', () => {
    expect(new Calculation(operators['/'], 6, 3).apply()).eql(2);
  })


})
