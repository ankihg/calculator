module.exports = (app) => {
  app.directive('equationInput', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: './directives/templates/equation-input.html'
    }
  })
}
