'use strict';
const expect = require('chai').expect;

describe('calculation model unit testing', () => {

  console.log('require models');
  console.log(__dirname+'/../models');
  const models = {};
  require(__dirname+'/../models')(models);

  const  operators = models.operators,
    Calculation = models.Calculation;

  it('add 5 and 3', () => {
    console.log(operators['+']);
  })





})
