const mongoose = require("mongoose");
const {isEmail}=require('validator');

const UserModel = mongoose.model(
    //nom de la bdd
    "crm",
    // données
    {
        pseudo: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 55,
            unique: true,
            trim: true
        },
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail],
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        },
        photo: {
            type: String,
        },
    },
    // la table
    "user"
);

module.exports = {UserModel};