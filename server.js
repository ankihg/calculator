'use strict';
const express = require('express'),
  app = express(),
  config = require(__dirname+'/config'),
  models = require(__dirname+'/models')(),
  routesInjector = require(__dirname+'/routes');

// middleware
app.use(require('body-parser').json());
// app.use(require('morgan')());

//server
const apiRouter = express.Router();
routesInjector(apiRouter, models);
app.use('/api', apiRouter);


//client
const clientRouter = express.Router();
clientRouter.use(express.static(__dirname+'/build'));
app.use(clientRouter);


//listen
app.listen(config.PORT, () => console.log('server speaking on port '+config.PORT));
