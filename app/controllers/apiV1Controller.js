(function () {
    "use strict";

    var myDb = require('../models/hello');

    module.exports = {
      list: function listAction (req, res, next) {
        res.send(myDb.getAll());
        return next();
      },

      getId: function getIdAction (req, res, next) {
        res.send(myDb.getById(req.params.id));
        return next();
      }
    }
}())