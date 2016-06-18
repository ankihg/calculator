'use strict';
module.exports = (app) => {
  app.factory('CalcService', ['$http', function($http) {

    this.getOperators = function(next) {
      $http.get('/operators')
        .then(res => next(res.data.data))
        .catch(err => console.log(err))
    }

    return this;

  }])
}
