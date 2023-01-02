const mongoose = require("mongoose");
const { isEmail } = require('validator');


const userSchema = mongoose.Schema(
    {
        pseudo: {
            type: String,
            required: true,
            minLength: [3, 'Doit comporter au moins 3 caractères, celui ci seulement {VALUE}'],
            maxLength: [55, 'Doit comporter au maximum 55 caractères, celui ci {VALUE}'],
            unique: true,
            // pour enlever les espace en début et fin de chaine
            trim: true
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail],
            lowercase: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            max: 1024,
            minlength: 6
        },
            picture: {
            type: String,
            default: "./uploads/profil/random-user.png"
          },
    }
    );

const UserModel = mongoose.model('User', userSchema, 'user');

module.exports = {UserModel};