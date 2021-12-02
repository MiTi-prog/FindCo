/**
 * Module Dependencies
 */
const config = require('config');
const restify = require('restify');
const mongoose = require('mongoose');
const restifyPlugins = require('restify-plugins');
	

/**
  * Initialize Server
  */
var server = restify.createServer(
    config.app
);

/**
  * Middleware
  */
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser(server.acceptable));
server.use(restify.plugins.bodyParser(server.acceptable));

/**
  * Start Server, Connect to DB & Require Routes
  */
server.listen(config.server.port, () => {
  // establish connection to mongodb
  mongoose.Promise = global.Promise;
  mongoose.connect(config.db.uri);
  const db = mongoose.connection;
  db.on('error', (err) => {
	  require('./routes')(server);
      console.log(`Server is listening on port ${config.server.port} but DB Connetion is not working, so server cannot get any real data`);
	  console.error('Reason that DB Failed is: ${err}');
  });
  db.once('open', () => {
      require('./routes')(server);
      console.log(`Server is listening on port ${config.server.port}`);
  });
});