'use strict';
const angular = require('angular'),
  ngMaterial = require('angular-material');

const app = angular.module('CalculatorApp', [ngMaterial]);
require('./services')(app);
require('./controllers')(app);
require('./directives')(app);
