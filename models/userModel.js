const mongoose = require("mongoose");
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema(
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
    },
    {
        timestamps: true,
    }
    );


    // lance la fct avant le save
    userSchema.pre("save", async function(next){
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt)
        next();
    })

    // pour comparer le mdp de l'utilisateur avec celui saisie pour le login
    userSchema.statics.login = async function(email, password){
        const user = await this.findOne({email});
        if (user) {
            const auth = await bcrypt.compare(password, user.password)
            if (auth){
                return user
            }
            throw Error('incorrect password');
        }
        throw Error('incorrect email');
        };
    

const UserModel = mongoose.model('User', userSchema);

module.exports = {UserModel};