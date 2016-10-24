(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const coffee = require('../routes/coffee');

    app.use(crossOrigin)

    // *** register routes *** //
    app.use('/', routes);
    app.use('/coffee', coffee);

  };

})(module.exports);


function crossOrigin(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','Content-Type')
  next()
}
