const mongoose = require("mongoose");


const customerSchema = mongoose.Schema(
    {
        civilite: {
            type: String,
            enum: {
                values: ['Mr', 'Mme'],
                message: '{VALUE} is not supported'
            }
        },
        firstname: {
            type: String,
            // required: true
        },
        lastname: {
            type: String,
            // required: true
        },
        intitule: {
            type: String,
        },
        adress: {
            type: String,
        },
        cp: {
            type: String,
        },
        city: {
            type: String,
            // required: true
        },
        phone: {
            type: String,
            // required: true
        },
        email: {
            type: String,
            // required: true
        },
        link_with: {
            type: String,
        },
        photo: {
            type: String,
        },
        provenance: {
            type: String,
            // required: true
        },
        date_creation: {
            type: Date,
            default: Date.now,
        },
        commentaires: {
            type: String,
        }
    }
);
 const CustomerModel = mongoose.model('Customer', customerSchema, 'customer');

module.exports = {CustomerModel};