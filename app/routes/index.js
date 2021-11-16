module.exports = function routes(server) {

  var APIV1Controller = require('../controllers/apiV1Controller');

  server.get('/api/hello', APIV1Controller.list);
  server.get('/api/hello/:id', APIV1Controller.getId)

}