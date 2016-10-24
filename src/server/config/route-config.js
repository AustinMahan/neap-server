(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const coffee = require('../routes/coffee');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/coffee', coffee);

  };

})(module.exports);
