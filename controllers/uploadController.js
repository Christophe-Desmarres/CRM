const {UserModel} = require('../models/userModel');
const fs = require('fs');
const {promisify} = require('util');
const { uploadErrors } = require('../utils/errors.utils');



module.exports.uploadProfil = async (req, res) => {
    try {
        if (req.file.mimetype !== 'image/jpg' && req.file.mimetype !== 'image/png' && req.file.mimetype !== 'image/jpeg') {
            throw Error('invalid file');
        }
        if (req.file.size > 500000) {
            throw Error('max size');
        }
    } catch (err) {
        const errors = uploadErrors(err);
        return res.status(400).json({
            errors
        });
    }

    const fileName = req.body.name + '.jpg';
    const newFilePath = `${__dirname}/../client/public/uploads/profil/${fileName}`;


    // récupere le fichier uploadé, le renomme et le déplace ds le dossier voulu (écrase le fichier existant si même nom de fichier)
    fs.rename(req.file.path, newFilePath, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
    });



    try {
        const result = await UserModel.findByIdAndUpdate(
            req.body.userId, {
                picture: './uploads/profil/' + fileName
            },
            {
                new: true,
                upsert: true,
                setDefaultsOnInsert: true
              }
        )
        if(result) return res.status(200).json({
            message: `image de profil de ${req.body.name} sauvegardée`
        });

    } catch (err) {
        return res.status(500).send({
            message: err.message
        });

    }

}