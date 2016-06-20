module.exports = (app) => {
  app.directive('aboutMe', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: './directives/templates/about-me.html'
    }
  })
}
