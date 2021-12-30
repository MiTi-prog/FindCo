const errors = require('restify-errors');
const rjwt = require('restify-jwt-community');
const config = require("../../config/default");
module.exports = function routes(server) {

  var APIV1Controller = require('../controllers/apiV1Controller');

  //Not-Auth routes
  server.post('/v1/register', APIV1Controller.register);
  server.post('/v1/login', APIV1Controller.login);
  server.get('/v1/contractors', APIV1Controller.GetAlllContractors);

  server.get('/api/hello', APIV1Controller.list);
  server.get('/api/hello/:id', APIV1Controller.getId);

  //Restricted routes
  server.post('/v1/user/edit', rjwt({ secret: config.JWT_SECRET }), APIV1Controller.EditUser);
  server.del('/v1/user/delete', rjwt({ secret: config.JWT_SECRET }), APIV1Controller.DeleteUser);
  server.get('/v1/contractors/:id', rjwt({ secret: config.JWT_SECRET }), APIV1Controller.GetContractor);

  //Company
  server.post('/v1/company/add', rjwt({ secret: config.JWT_SECRET }), APIV1Controller.CompanyAdd);
  server.post('/v1/company/edit', rjwt({ secret: config.JWT_SECRET }), APIV1Controller.CompanyEdit);
  server.del('/v1/company/delete', rjwt({ secret: config.JWT_SECRET }), APIV1Controller.CompanyDelete);

}
