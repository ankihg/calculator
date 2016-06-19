module.exports = (app) => {
  app.directive('calculator', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: './directives/templates/calculator.html'
    }
  })
}
