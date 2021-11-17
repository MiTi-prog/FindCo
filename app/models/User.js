const mongoose = require('mongoose');
const uuid = require('node-uuid');
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = new mongoose.Schema({
    _id_contractor: {
        type: String,
        default: uuid.v1
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    date_birth: {
        type: Date,
        required: true
    },
    role: {
        type: String,
        default: 'user',
        array: ["admin", "contractor", "user"]
    },
});

UserSchema.plugin(uniqueValidator)
const User = mongoose.model('User', UserSchema);
module.exports = User;
