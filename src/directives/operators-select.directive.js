module.exports = (app) => {
  app.directive('operatorsSelect', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: './directives/templates/operators-select.html',
      controller: 'CalcController',
      controllerAs: 'calcCtrl'
    }
  })
}
