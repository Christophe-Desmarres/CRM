const  {UserModel} = require("../models/userModel");
const ObjectId = require('mongoose').Types.ObjectId;



module.exports.getAllUsers = async (req, res) => {
    // select('-password) selectionne tous sauf le password
    const users = await UserModel.find().select('-password');
    res.status(200).json(users)
}


module.exports.userInfo = (req, res) => {
    // console.log(req.params);
    if (!ObjectId.isValid(req.params.id)) return res.status(400).send('ID unknow : ' + req.params.id);

    UserModel.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else console.log('ID unknow : ' + err);
    }).select('-password');
};



module.exports.updateUser = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).send('ID unknow : ' + req.params.id);
    try {
        UserModel.findOneAndUpdate({
                _id: req.params.id
            }, {
                $set: {
                    picture: req.body.picture
                },
            }, {
                new: true,
                upsert: true,
                setDefaultsOnInsert: true
            },
            (err, docs) => {
                if (!err) return res.send(docs);
                if (err) return res.status(500).send({
                    message: err
                });
            }
        );
    } catch (err) {
        return res.status(500).json({
            message: err
        });
    }
}


module.exports.deleteUser = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) 
    return res.status(400).send('ID unknow : ' + req.params.id);

    try {
        await UserModel.deleteOne({_id: req.params.id})
            res.status(200).json({message: "Suppression réussi."});
    } catch (err) {
        return res.status(500).json({message: "kkk"});
    }
}