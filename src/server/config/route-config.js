(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const coffee = require('../routes/coffee');
    const user = require('../routes/users');

    app.use(crossOrigin)

    // *** register routes *** //
    app.use('/', routes);
    app.use('/coffee', coffee);
    app.use('/user', user);

  };

})(module.exports);


function crossOrigin(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
  next()
}
