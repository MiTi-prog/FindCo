const mongoose = required('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const CompanySchema = new mongoose.Schema(
    {
        _id_company: { 
            type: String, 
            default: uniqueValidator.v1
        },
        company_name: {
            type: String,
            unique: true,
            required: true
        },
        tax_number: {
            type: Number,
            unique: true,
            required: true
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
    }
);

module.exports = mongoose.model("Company", CompanySchema);