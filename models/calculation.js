'use strict';
module.exports = (models) => {

  // Calculation constructor
  const Calculation = models.Calculation = function(tmp) {
    for (let key in tmp) { this[key] = tmp[key] }
  }

  // apply operation to operands and return result
  Calculation.prototype.apply = function() {
    return this.operator.fn(this.operand1, this.operand2);
  }

}
