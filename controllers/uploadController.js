const UserModel = require('../models/userModel');
const fs = require('fs');
const { promisify } = require('util');
const pipeline = promisify(require('stream').pipeline);

module.exports.uploadProfil = async (req, res) => {
    try {
        if (req.file.mimetype !== 'image/jpg' && req.file.mimetype !== 'image/png' && req.file.mimetype !== 'image/jpeg') {
            throw Error('invalid file');
        }
        if (req.file.size > 500000) {
            throw Error('max size');
        }
    } catch (err) {
        // const errors = uploadErrors(err);
        return res.status(201).json({
            error: err.message
        });
    }

    const fileName = req.body.name + '.jpg';
    // res.status(201).json({
    //     nom: fileName,
    //     message: 'Votre photo de profil a bien été enregistrée',
    // });

// erreur à creuser
// https://nodejs.org/api/stream.html#streampipelinestreams-options


    await pipeline(
        req.file.stream,
        fs.createWriteStream(
            `${__dirname}/../client/public/uploads/profil/${fileName}`
        )
    );

    // try {
    //     await UserModel.findByIdAndUpdate(req.body.userId, {picture: './uploads/profil/' + fileName}); 
    //     res.status(200).send();
    // } catch (err) {
    //     return res.status(500).send
    // }

}