'use strict';
module.exports = (models) => {

  const Operator = function(symb, name, fn) {
    [this.symb, this.name, this.fn] = [symb, name, fn];
  }

  Operator.all = [
      new Operator('+', 'add', (a, b) => a + b),
      new Operator('-', 'add', (a, b) => a - b),
      new Operator('*', 'add', (a, b) => a * b),
      new Operator('/', 'add', (a, b) => a / b)
    ]

  models.operators = {};
  Operator.all.forEach((op) => {
    models.operators[op.symb] = op;
  });

}
