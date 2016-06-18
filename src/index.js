'use strict';
const angular = require('angular');

const app = angular.module('CalculatorApp', []);
require('./services')(app);
require('./controllers')(app);
