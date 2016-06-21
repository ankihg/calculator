'use strict';
module.exports = (models) => {

  // Operator constructor
  const Operator = function(symb, name, fn) {
    [this.symb, this.name, this.fn] = [symb, name, fn];
  }

  // all operators accesed by operator symbol
  models.operators = {
      '+': new Operator('+', 'add', (a, b) => a + b),
      '-': new Operator('-', 'sub', (a, b) => a - b),
      '*': new Operator('*', 'mult', (a, b) => a * b),
      '/': new Operator('/', 'div', (a, b) => a / b)
    }

}
