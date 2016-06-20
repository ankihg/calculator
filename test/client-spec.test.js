require('../src');
const angular = require('angular');
require('angular-mocks');

describe('client-side testing', () => {


  describe('calcCtrl testing', () => {
    let calcCtrl;

    beforeEach(angular.mock.module('CalculatorApp'));
    beforeEach(angular.mock.inject(function($controller) {
      calcCtrl = $controller('CalcController');
    }));

    it('have greeting', () => {
      expect(calcCtrl.greeting).toEqual('lets do some math !!')
    })

    describe('REST testing', () => {

      let $httpBackend

      beforeEach(angular.mock.inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
      }));

      it('get all operators', () => {
        $httpBackend.expectGET('/operators')
          .respond(200, {msg: 'all operators', data: {
              '+': {symb: '+', name:'add'},
              '-': {symb: '-', name:'sub'}
            }});
        calcCtrl.init();
        $httpBackend.flush();

        expect(calcCtrl.operators['+']).toEqual({symb: '+', name:'add'})
        expect(calcCtrl.operators['-']).toEqual({symb: '-', name:'sub'})
      })

      it('post to calculate', () => {
        $httpBackend.expectPOST('/calculate')
          .respond(200, {msg: '1 + 2 calculated', data: '3'});
        calcCtrl.equation = {
          operand1: 1,
          operator: '+',
          operand2: 2
        }
        calcCtrl.calculate();
        $httpBackend.flush();

        expect(calcCtrl.equation).toEqual(null);

        let lastCalc = calcCtrl.calculationsStack[0];
        expect(lastCalc.operand1).toEqual(1);
        expect(lastCalc.operator).toEqual('+');
        expect(lastCalc.operand2).toEqual(2);
        expect(lastCalc.res).toEqual('3');
      })

    })

  })

})
