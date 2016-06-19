module.exports = (app) => {
  app.directive('calculation', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: './directives/templates/calculation.html'
    }
  })
}
