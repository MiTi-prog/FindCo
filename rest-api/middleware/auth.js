const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize');

const main = require('../app/app.js');
const User = main.models.application_user;

exports.authenticate = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Get user by email
            const user = await User.findOne({ where : {email:email}, raw: true});

            // Match Password
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (!isMatch) reject("Password did not match");
                    //throw 'Password did not match';
                resolve(user);
            });
        } catch (err) {
            // Email not found or password did not match
            reject('Authentication Failed');
        }
    });
};

async function parseJwt (token) {

    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const buff = Buffer.from(base64, 'base64');
    const payloadinit = buff.toString('ascii');
    const payload = JSON.parse(payloadinit);

    return payload;
};
exports.parseJWT = parseJwt;
