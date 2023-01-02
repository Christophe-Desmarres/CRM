const mongoose = require("mongoose");

const CustomerModel = mongoose.model(
    //nom de la bdd
    "crm",
    // données
    {
        civilite: {
            type: String,
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
    },
    // la table
    "customer"
);

module.exports = {CustomerModel};