module.exports = (app) => {
  require('./operators-select.directive.js')(app);
  require('./equation-input.directive.js')(app);
  require('./calculations-stack.directive.js')(app);
  require('./calculation.directive.js')(app);
  require('./calculator.directive.js')(app);
  require('./error-handler.directive.js')(app);
  require('./about-me.directive.js')(app);
}
