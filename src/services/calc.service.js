'use strict';
module.exports = (app) => {
  app.factory('CalcService', ['$http', function($http) {

    this.getOperators = function(next) {
      $http.get('/api/operators')
        .then(res => {
          next(res.data.data)})
        .catch(err => console.log(err));
    }

    this.postCalcuation = function(equation, next) {
      $http.post('/api/calculate', equation)
        .then(res => next(res.data))
        .catch(err =>  next(err.data));
    }

    return this;

  }])
}
