module.exports = (app) => {
  app.directive('calculationsStack', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: './directives/templates/calculations-stack.html'
      // controller: 'CalcController',
      // controllerAs: 'calcCtrl'
    }
  })
}
