module.exports = (app) => {
  app.directive('errorHandler', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: './directives/templates/error-handler.html'
    }
  })
}
