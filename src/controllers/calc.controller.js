'use strict';
module.exports = (app) => {
  app.controller('CalcController', ['CalcService', function(CalcService) {

    var vm = this;

    vm.plz = 'lets do some math !!';
    vm.operators = null;
    vm.operator;

    vm.init = function() {
      CalcService.getOperators((operators) => {
        this.operators = operators;
        console.log(this.operators);
      });
    }

    return vm;

  }]);
}
