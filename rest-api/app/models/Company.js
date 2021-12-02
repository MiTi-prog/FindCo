const mongoose = require('mongoose');
const uuid = require('node-uuid');
const uniqueValidator = require('mongoose-unique-validator');

const CompanySchema = new mongoose.Schema(
    {
        _id: { 
			type: String,
			default: uuid.v1
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
            //required: true,
            max: 50,
			default: ""
            //unique: true
        },
        phone: {
            type: Number,
			default: 000000000
            //required: true,
            //unique: true
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