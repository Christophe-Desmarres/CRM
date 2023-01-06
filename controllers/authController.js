const {
    UserModel
} = require('../models/userModel');
const jwt = require('jsonwebtoken');


module.exports.signUp = async (req, res) => {
    console.log(req.body);
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
        res.status(400).send({
            err
        })
    }
}

const maxAge = 3 * 24 * 60 * 60 * 100;
const createToken = (id) => {
    return jwt.sign({
        id
    }, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    });
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
            user: user._id
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: err.message
        });
    }
}




module.exports.logout = async (req, res) => {
    // on mets la durée du cookie 'jwt' à 1ms pour expirer le token
    res.cookie('jwt', '', {maxAge:1});
    res.redirect('/');
}