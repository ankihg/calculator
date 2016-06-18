'use strict';
module.exports = (models) => {

  const Calculation = models.Calculation = function(tmp) {
    for (let key in tmp) { this[key] = tmp[key] }
  }

  Calculation.prototype.apply = function() {
    return this.operator.fn(this.operand1, this.operand2);
  }

}
