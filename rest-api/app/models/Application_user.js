const mongoose = require('mongoose');
const uuid = require('node-uuid');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    _id: { //Zgleda če hočmo svoj ID more bit ime _id, če je kaj drugega, recmo _id_contractor potem MongoDB neki sam generira: https://stackoverflow.com/a/8100826/3368585
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
    phone: {
        type: String, //Če je type: Number, potem odreže 0 na začetk
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
        type: String,
        default: 'user',
        enum: ["admin", "contractor", "user"]
    },
    api_key: {
        type: String
    }
});
UserSchema.set("timestamps", true); //auto generate CreateAt/UpdatedAt fields
UserSchema.plugin(uniqueValidator);

const User = mongoose.model('Application_user', UserSchema);
module.exports = User;
