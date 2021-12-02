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
/**
 /**
 * @swagger
 * /login:
 *  post:
 *    summary: "Allows user to login"
 *    description: Login to the system
 *    operationId: "login"
 *    requestBody:
 *    schema:
 *      type: object
 *      properties:
 *          password:
 *              type: string
 *          email:
 *              type: string
 *      examples:
 *          '0':
 *              value: "{\r\n    \"email\": \"test@raca.si\",\r\n    \"password\": \"test\"\r\n}"
 *    responses:
 *      '200':
 *        description: A successful response
 *        schema:
 *          type: object
 *          properties:
 *              exp:
 *                  type: integer
 *              iat:
 *                  type: integer
 *              token:
 *                  type: string
 *      '401':
 *        description: User not autenticated response
 *        schema:
 *          type: object
 *          properties:
 *              type:
 *                  type: string
 *              message:
 *                  type: string
 *        examples:
 *        type: object
 *        '0':
 *             value: '{"code":"Unauthorized","message":"Authentication Failed"}'
 *
 *
 */
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
/**
 * @swagger
 * /contractors:
 *  get:
 *    summary: "Returns contractors list"
 *    description: Get list of all contractors
 *    operationId: "GetAlllContractors"
 *    parameters: []
 *    responses:
 *      '200':
 *        description: A successful response
 *        schema:
 *          type: "object"
 *          properties:
 *              first_name:
 *                  type: "string"
 *              last_name:
 *                  type: "string"
 */
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
