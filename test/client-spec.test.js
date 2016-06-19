require('../src');
var angular = require('angular');
require('angular-mocks');

describe('client-side testing', () => {

  let calcCtrl;

  beforeEach(angular.mock.module('CalculatorApp'));
  beforeEach(angular.mock.inject(function($controller) {
    calcCtrl = $controller('CalcController');
  }));

  it('do a test', () => {
    expect(false).toBe(true);
  })


})
