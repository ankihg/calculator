'use strict';
module.exports = (models) => {

  const Calculation = models.Calculation = new function(operator, operand1, operand2) {
    [this.operator, this.operand1, this.operand2] = [operator, operand1, operand2];
  }

  Calculation.prototype.apply = function() {
    return this.operator.fn(this.operand1, this.operand2);
  }

}
