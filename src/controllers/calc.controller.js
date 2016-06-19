'use strict';
module.exports = (app) => {
  app.controller('CalcController', ['CalcService', function(CalcService) {

    var vm = this;

    vm.plz = 'lets do some math !!';
    vm.operators = null;

    vm.equation = {
      operator: null,
      operand1: null,
      operand2: null,
      res: null
    }

    vm.init = function() {
      CalcService.getOperators((operators) => {
        this.operators = operators;
        console.log(this.operators);
      });
    }

    vm.calculate = function() {
      console.log(vm.equation);
      CalcService.postCalcuation(vm.equation, (res) => {
        console.log(res);
        vm.equation.res = res;
      })
    }

    return vm;

  }]);
}
