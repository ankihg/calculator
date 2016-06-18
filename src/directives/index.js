module.exports = (app) => {
  require('./operators-select.directive.js')(app);
  require('./equation-input.directive.js')(app);
}
