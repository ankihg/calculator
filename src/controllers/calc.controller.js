'use strict';
module.exports = (app) => {
  app.controller('CalcController', ['CalcService', function(CalcService) {

    this.plz = 'lets do some math !!';
    this.operators = null;

    this.init = function() {
      CalcService.getOperators((operators) => {
        this.operators = operators;
        console.log(this.operators);
      });
    }

  }]);
}
