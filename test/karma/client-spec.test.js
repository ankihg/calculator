require('../../build/bundle.js');
const angular = require('angular');
require('angular-mocks');

describe('client-side testing', () => {


  describe('calcCtrl testing', () => {
    let calcCtrl;

    // mock the app
    beforeEach(angular.mock.module('CalculatorApp'));

    // inject the conroller
    beforeEach(angular.mock.inject(function($controller) {
      calcCtrl = $controller('CalcController');
    }));

    // calcCtrl has greeting
    it('have greeting', () => {
      expect(calcCtrl.greeting).toEqual('Let\'s do math!')
    })


    describe('REST testing', () => {

      let $httpBackend

      // inject $httpBackend for mock calls
      beforeEach(angular.mock.inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
      }));


      it('get all operators', () => {
        // mock get to operators response
        $httpBackend.expectGET('/api/operators')
          .respond(200, {msg: 'all operators', data: {
              '+': {symb: '+', name:'add'},
              '-': {symb: '-', name:'sub'}
            }});

        // mock get to operators
        calcCtrl.getOperators();
        $httpBackend.flush();

        // ensure operators
        expect(calcCtrl.operators['+']).toEqual({symb: '+', name:'add'})
        expect(calcCtrl.operators['-']).toEqual({symb: '-', name:'sub'})
      })


      it('post to calculate', () => {
        // mock post to calculate response
        $httpBackend.expectPOST('/api/calculate')
          .respond(200, {msg: '1 + 2 calculated', data: '3'});

        // mock equation to calculate
        calcCtrl.equation = {
          operand1: 1,
          operator: '+',
          operand2: 2
        }

        // mock post to calculate
        calcCtrl.calculate();
        $httpBackend.flush();

        // calcCtrl.equation should be reset
        expect(calcCtrl.equation).toEqual(null);

        // new calculation at top of calcCtrl.calculationsStack
        let lastCalc = calcCtrl.calculationsStack[0];
        expect(lastCalc.operand1).toEqual(1);
        expect(lastCalc.operator).toEqual('+');
        expect(lastCalc.operand2).toEqual(2);
        expect(lastCalc.res).toEqual('3');

        // no error message
        expect(calcCtrl.errMsg).toBeNull();
      })


      it('fail post to calculate', () => {
        // save value to compare calcCtrl.calculationsStack length after post
        let calcStackLength = calcCtrl.calculationsStack.length;

        // mock post to calculate response
        $httpBackend.expectPOST('/api/calculate')
          .respond(200, {msg: 'insufficient operands', err: new Error('insufficient operands')});

        // mock equation to calculate
        calcCtrl.equation = {
          operand1: 'z',
          operator: '+',
          operand2: '5'
        }

        // mock post to calculate
        calcCtrl.calculate();
        $httpBackend.flush();

        // calcCtrl.equation should not be reset
        expect(calcCtrl.equation.operand1).toEqual('z');

        // nothing should be added to calcCtrl.calculationsStack
        expect(calcCtrl.calculationsStack.length).toEqual(calcStackLength);

        // has error message
        expect(calcCtrl.errMsg).not.toBeNull();
      })

    })
  })

})
