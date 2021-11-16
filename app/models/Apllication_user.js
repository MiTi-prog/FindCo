const mongoose = required('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema(
    {
        _id_user: { 
            type: String, 
            dafault: uniqueValidator.v1 
        },
        first_name: {
            type: String,
            required: true,
            min: 3,
            max: 20,
            unique: true
        },
        last_name: {
            type: String,
            required: true,
            max: 50,
            unique: true
        },
        date_birth: {
            type: Date,
            required: true,
            max: 50,
            unique: true
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true
        },
        phone: {
            type: Number,
            required: true,
            unique: true
        },
        street_address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        postal_code: {
            type: Number,
            required: true
        }, 
        role: {
            type: Number,
            enum: [1, 2]    //1-user, 2-admin
        },
        password: {
            type: String,
            requiredd: true,
            min: 6
        },
        api_key: {
            type: String
        },
        created_at: {
            type: Date,
            dafault: Date.now
        },
        updated_at: {
            type: Date,
            dafault: Date.now
        }
    }
);

module.exports = mongoose.model("Application_user", UserSchema);