'use strict';
module.exports = (app) => {
  app.controller('CalcController', ['CalcService', function(CalcService) {

    var vm = this;

    vm.greeting = 'Let\'s do math!';

    // will retrieve at initialization
    vm.operators = null;

    // equation input object
    vm.equation = {
      operator: null,
      operand1: null,
      operand2: null,
      res: null
    }

    // invalid input notifications
    vm.errMsg = null;

    // previous calculations stack
    vm.calculationsStack = [];

    vm.getOperators = function() {
      CalcService.getOperators((operators) => {
        this.operators = operators;
      });
    }

    vm.calculate = function() {
      CalcService.postCalcuation(vm.equation, (res) => {
        if (res.err) return vm.errMsg = res.msg;  // display error message and return

        vm.errMsg = null; // no error
        vm.equation.res = res.data; // save result to equation
        vm.calculationsStack.unshift(vm.equation); // push equation to previous calculations stack

        // reset equation input
        vm.equation = null;
      })
    }

    vm.accumulate = function() {
      CalcService.postCalcuation(vm.equation, (res) => {
        if (res.err) return vm.errMsg = res.msg; // display error message and return

        vm.errMsg = null; // no error
        vm.equation.res = res.data; // save result to equation
        vm.calculationsStack.unshift(vm.equation); // push equation to previous calculations stack


        // set equation input for calculation accumulation
        let operator = vm.equation.operator;
        vm.equation = {}; // reset equation input
        vm.equation.operand1 = parseFloat(res.data); // set operand1 to result of calculation
        vm.equation.operator = operator; // set to same operator
      })
    }

    vm.copyToEquation = function(calculation) {
      // shallow copy; dont want pass by reference
      vm.equation = {};
      vm.equation.operator = calculation.operator;
      vm.equation.operand1 = calculation.operand1;
      vm.equation.operand2 = calculation.operand2;
    }

    return vm;

  }]);
}
