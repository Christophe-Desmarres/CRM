const {UserModel} = require('../models/userModel');
const jwt = require('jsonwebtoken');
const { signUpErrors, signInErrors } = require('../utils/errors.utils');



const maxAge = 3 * 24 * 60 * 60 * 100;
const createToken = (id) => {
    return jwt.sign({
        id
    }, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    });
}

module.exports.signUp = async (req, res) => {
    // on déstructure le req.body en req.body.pseudo, requ.body.email et req....
    const {
        pseudo,
        email,
        password
    } = req.body

    try {
        const user = await UserModel.create({
            pseudo,
            email,
            password
        });
        res.status(201).json({
            user: user._id
        })
    } catch (err) {
        const errors = signUpErrors(err);
        res.status(400).send({
            errors
        })
    }
}

module.exports.signIn = async (req, res) => {
    const {
        email,
        password
    } = req.body;

    try {
        const user = await UserModel.login(email, password);
        // création d'un token
        const token = createToken(user._id)
        res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: maxAge
            })
            res.status(200).json({
                user: user._id,
                name: user.pseudo
            })
            console.log(res);
    } catch (err) {
        console.log(err);
        const errors = signInErrors(err);

        res.status(400).json({
            errors
        });
    }
}




module.exports.logout = async (req, res) => {
    // on mets la durée du cookie 'jwt' à 1ms pour expirer le token
    res.cookie("jwt", "", {maxAge:1});
    res.redirect('/');
}