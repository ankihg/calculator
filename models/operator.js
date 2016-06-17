'use strict';
module.exports = (models) => {

  const Operator = function(symb, name, fn) {
    [this.symb, this.name, this.fn] = [symb, name, fn];
  }

  models.operators = {
      '+': new Operator('+', 'add', (a, b) => a + b),
      '-': new Operator('-', 'sub', (a, b) => a - b),
      '*': new Operator('*', 'mult', (a, b) => a * b),
      '/': new Operator('/', 'div', (a, b) => a / b)
    }

}
