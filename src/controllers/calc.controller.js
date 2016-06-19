'use strict';
module.exports = (app) => {
  app.controller('CalcController', ['CalcService', function(CalcService) {

    var vm = this;

    vm.greeting = 'lets do some math !!';
    vm.operators = null;

    vm.equation = {
      operator: null,
      operand1: null,
      operand2: null,
      res: null
    }

    vm.calculationsStack = [];

    vm.init = function() {
      CalcService.getOperators((operators) => {
        this.operators = operators;
      });
    }

    vm.calculate = function() {
      CalcService.postCalcuation(vm.equation, (res) => {
        vm.equation.res = res;
        vm.calculationsStack.unshift(vm.equation);
        vm.equation = null;
      })
    }

    return vm;

  }]);
}
