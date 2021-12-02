const errors = require('restify-errors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/Application_user');
const auth = require('../../middleware/auth');
const config = require("../../config/default");

function register(req, res, next) {
    const user = new User(req.body);
     bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, async (err, hash) => {
            // Hash Password
            user.password = hash;
            // Save User
            try {
                const newUser = await user.save();
                res.send(201, "User created successfully");
                next();
            } catch (err) {
                return next(new errors.InternalError(err.message));
            }
        });
    });
}
async function login (req, res, next) {
    const { email, password } = req.body;

    try {
        // Authenticate User
        const user = await auth.authenticate(email, password);

        // Create JWT
        const token = jwt.sign(user.toJSON(), config.JWT_SECRET, {
            expiresIn: config.JWT_EXPIRATION
        });

        const { iat, exp } = jwt.decode(token);
        // Respond with token
        res.send({ iat, exp, token });

        next();
    } catch (err) {
        // User unauthorized
        return next(new errors.UnauthorizedError(err));
    }
}

function GetAlllContractors(req, res, next)
{
    // find each user with role matching 'contractor', ***selecting the `first_name` and `last_name` fields*** (with -_id you exclude _id from returning to your browser
    User.find({ role: "contractor"}, '-_id first_name last_name', function(err, doc) {
        if (err) {
            return next(
                new errors.InvalidContentError(err.errors.name.message),
            );
        }
        res.send(doc);
        next();
    });
}

async function authTest (req, res, next) {
    // Check for JSON
    if (!req.is('application/json')) {
        return next(
            new errors.InvalidContentError("Expects 'application/json'")
        );
    }
    try{
        res.send(201, "To je pa test!!!!");
        next();
    } catch (err) {
        return next(new errors.InternalError(err.message));
    }
}

(function () {
    "use strict";

    var myDb = require('../models/hello');

    module.exports = {
        register:register,
        login:login,
        GetAlllContractors:GetAlllContractors,
        authTest:authTest,
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
