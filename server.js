'use strict';
const express = require('express'),
  app = express(),
  config = require(__dirname+'/config'),
  modelsInjector = require(__dirname+'/models'),
  routesInjector = require(__dirname+'/routes');

app.use(require('body-parser').json());
app.use(require('morgan')());

//server
const apiRouter = express.Router(),
  models = {};
routesInjector(apiRouter, modelsInjector(models));
app.use(apiRouter);

//listen
app.listen(config.PORT, () => console.log('server speaking on port '+config.PORT));
