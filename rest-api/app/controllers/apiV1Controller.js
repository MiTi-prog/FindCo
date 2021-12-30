const errors = require('restify-errors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const config = require("../../config/default");
const uuid = require('uuid-parse');

//Models
//Init models
const main = require('../app.js');
const User = main.models.application_user;
const Company = main.models.company;


function register(req, res, next) {
    const user = new User(req.body);
     bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, async (err, hash) => {
            // Hash Password
            user.password = hash;
            // Save User
            try {
                const newUser = await user.save();  //sql zamenjaj
                res.send(201, {status: "success", message: "User created successfully" });
                next();
            } catch (err) {
                if (err.name === 'SequelizeValidationError') {
                    return res.status(400).json({
                        stuatus: "error",
                        message: err.errors.map(e => e.message)
                    })
                } else if (err.name === 'SequelizeUniqueConstraintError') {
                    res.status(403)
                    res.send({ status: 'error', message: "User already exists"});
                } else {
                    return next(new errors.InternalError(err.message));
                }
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
        const token = jwt.sign(user, config.JWT_SECRET, {
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
async function GetAlllContractors(req, res, next)
{
    // find each user with role matching 'contractor', ***selecting the `first_name` and `last_name` fields*** (with -_id you exclude _id from returning to your browser
    try {
        const contractor = await main.sequilize.query('SELECT * FROM Application_user INNER JOIN company ON Application_user.idApplication_user = company.application_user_idApplication_user WHERE role=\'contractor\'', {
            model: User,
            mapToModel: true // pass true here if you have any mapped fields
        });

        if (contractor === null) {
            res.status(404)
            res.send({status: 'error', message: "No contractors exists"});
        } else {
            const mojster = [];
            for (i = 0; i < contractor.length; i++) {
                mojster[i] = {
                    id: uuid.unparse(contractor[i].idApplication_user),
                    first_name: contractor[i].first_name,
                    last_name: contractor[i].last_name,
                    company_name: contractor[i].dataValues.company_name
                };
            }
            res.send(201, mojster);
            next();
        }
    } catch (err) {
        return next(new errors.InternalError(err.message));
    }
}

//Restricted routes
async function GetContractor(req, res, next)
{
    try {

        const contractor = await User.findOne(
            { where : {idApplication_user:Buffer.from(uuid.parse(req.params.id))},
            include: [{
                model: Company,
                as: "companies",
                required: true
            }], raw: true});

        if (contractor === null) {
            res.status(404)
            res.send({status: 'error', message: "No contractors exists"});
        } else {
            console.log(contractor);
            const mojster = {
                    id: uuid.unparse(contractor.idApplication_user),
                    first_name: contractor.first_name,
                    last_name: contractor.last_name,
                    street_address: contractor.street_address,
                    city: contractor.city,
                    zip: contractor.zip,
                    country: contractor.country,
                    company: {
                        name: contractor["companies.company_name"],
                        city: contractor["companies.city"],
                        region: contractor["companies.region(location)"],
                        country: contractor["companies.country"],
                        logo: contractor["companies.logo_image"],
                        line_of_work: contractor["companies.line_of_work"],
                    }
                };
            res.send(201, mojster);
            next();
        }
    } catch (err) {
        return next(new errors.InternalError(err.message));
    }
    /*
    User.findOne({where: { role: "contractor"}}, '-idApplication_user first_name last_name', function(err, doc) {
        if (err) {
            return next(
                new errors.InvalidContentError(err.errors.name.message),
            );
        }
        res.send(doc);
        next();
    });
     */
}

async function EditUser(req, res, next)
{
    //Our request data can also be found in Json Web Token
    const JWT = await auth.parseJWT(req.headers.authorization.split(' ')[1]);

    /*
    const user = await User.findOne({ where : {email:'test22'}, raw: true}).catch(err => {
            return next(new errors.InternalError(err.message));
    });
     */

    //If role = admin or you are editing yourself then you can edit it
    if (JWT.role === 'admin' || JWT.email === req.body.email) {
        try {
            const newUser = await User.update(req.body, {where: {email: req.body.email}});
            res.send(201, {status: "success", message: "User updated successfully"});
            next();
        } catch (err) {
            if (err.name === 'SequelizeValidationError') {
                return res.status(400).json({
                    status: "error",
                    message: err.errors.map(e => e.message)
                })
            } else if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(403)
                res.send({status: 'error', message: "User already exists"});
            } else {
                return next(new errors.InternalError(err.message));
            }
        }
    }else {
        res.status(403)
        res.send({status: 'error', message: "Only admin or yourself can do this"});
    }
}

async function DeleteUser(req, res, next)
{
    //Our request data can also be found in Json Web Token
    const JWT = await auth.parseJWT(req.headers.authorization.split(' ')[1]);

    //If role = admin or you are editing yourself then you can edit it
    //console.log("JWT Role: " + JWT.role);
    //console.log("JWT Email: " + JWT.email);
    //console.log("Target Email: " + req.body.email);
    if (JWT.role === 'admin' || JWT.email === req.body.email) {
        try {
            const newUser = await User.destroy({where: {email: req.body.email}});
            res.send(201, {status: "success", message: "User has been deleted"});
            next();
        } catch (err) {
            if (err.name === 'SequelizeValidationError') {
                return res.status(400).json({
                    status: "error",
                    message: err.errors.map(e => e.message)
                })
            } else if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(403)
                res.send({status: 'error', message: "User already exists"});
            } else {
                return next(new errors.InternalError(err.message));
            }
        }
    }else {
        res.status(403)
        res.send({status: 'error', message: "Only admin or yourself can do this"});
    }
}

async function CompanyAdd(req, res, next)
{
    //Our request data can also be found in Json Web Token
    const JWT = await auth.parseJWT(req.headers.authorization.split(' ')[1]);
    let NewCompany;
    try{
        const UserIDBIN = await User.findOne({ where : {email:JWT.email}, raw: true});
        const UserID = uuid.unparse(UserIDBIN.idApplication_user);
        const UserID2 = UserIDBIN.idApplication_user;

        NewCompany = req.body;
        NewCompany.application_user_idApplication_user = UserID2;

        console.log(NewCompany);

    }catch (err){console.log(err)}
    const COMPANY = new Company(NewCompany);
    //If role = admin or contractor, then they can add a company
    //console.log("JWT Role: " + JWT.role);
    //console.log("JWT Email: " + JWT.email);
    //console.log("Target Email: " + req.body.email);

    if (JWT.role === 'admin' || JWT.role === "contractor") {
        try {
            await COMPANY.save();
            res.send(201, {status: "success", message: "Company has been added"});
            next();
        } catch (err) {
            if (err.name === 'SequelizeValidationError') {
                return res.status(400).json({
                    status: "error",
                    message: err.errors.map(e => e.message)
                })
            } else if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(403)
                res.send({status: 'error', message: "Company already exists"});
            } else {
                return next(new errors.InternalError(err.message));
            }
        }
    }else {
        res.status(403)
        res.send({status: 'error', message: "Only admin or yourself can do this"});
    }
}

async function CompanyEdit(req, res, next)
{
    //Our request data can also be found in Json Web Token
    const JWT = await auth.parseJWT(req.headers.authorization.split(' ')[1]);

    /*
    const user = await User.findOne({ where : {email:'test22'}, raw: true}).catch(err => {
            return next(new errors.InternalError(err.message));
    });
     */

    //If role = admin or you are editing yourself then you can edit it
    if (JWT.role === 'admin' || JWT.email === req.body.email) {
        try {
            const newCMP = await Company.update(req.body, {where: {tax_number: req.body.tax_number}});
            res.send(201, {status: "success", message: "Company updated successfully"});
            next();
        } catch (err) {
            if (err.name === 'SequelizeValidationError') {
                return res.status(400).json({
                    status: "error",
                    message: err.errors.map(e => e.message)
                })
            } else if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(403)
                res.send({status: 'error', message: "Company already exists"});
            } else {
                return next(new errors.InternalError(err.message));
            }
        }
    }else {
        res.status(403)
        res.send({status: 'error', message: "Only admin or yourself can do this"});
    }
}

async function CompanyDelete(req, res, next)
{
    //Our request data can also be found in Json Web Token
    const JWT = await auth.parseJWT(req.headers.authorization.split(' ')[1]);

    //If role = admin or you are editing yourself then you can edit it
    //console.log("JWT Role: " + JWT.role);
    //console.log("JWT Email: " + JWT.email);
    //console.log("Target Email: " + req.body.email);
    if (JWT.role === 'admin' || JWT.email === req.body.email) {
        try {
            const newCMP = await Company.destroy({where: {tax_number: req.body.tax_number}});
            res.send(201, {status: "success", message: "Company has been deleted"});
            next();
        } catch (err) {
            if (err.name === 'SequelizeValidationError') {
                return res.status(400).json({
                    status: "error",
                    message: err.errors.map(e => e.message)
                })
            } else if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(403)
                res.send({status: 'error', message: "Company already exists"});
            } else {
                return next(new errors.InternalError(err.message));
            }
        }
    }else {
        res.status(403)
        res.send({status: 'error', message: "Only admin or yourself can do this"});
    }
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
        GetContractor:GetContractor,
        EditUser:EditUser,
        DeleteUser:DeleteUser,
        CompanyAdd:CompanyAdd,
        CompanyEdit:CompanyEdit,
        CompanyDelete:CompanyDelete,
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

