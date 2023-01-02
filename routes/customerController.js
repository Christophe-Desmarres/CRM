const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const {
    CustomerModel
} = require('../models/customerModel');

// read
router.get('/', (req, res) => {
    CustomerModel.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log("Error to get data : " + err)
    })
});

// create
router.post('/', (req, res) => {
    const newRecord = new CustomerModel({
        "civilite": req.body.civilite,
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "intitule": req.body.intitule,
        "adress": req.body.adress,
        "cp": req.body.cp,
        "city": req.body.city,
        "phone": req.body.phone,
        "email": req.body.email,
        "link_with": req.body.link_with,
        "photo": req.body.photo,
        "provenance": req.body.provenance,
        "date_creation": req.body.date_creation,
        "commentaires": req.body.commentaires
    });

    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error creating new data ' + err)
    })
});


// update
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).send("ID unknow : " + req.params.id)

    const updateRecord = {
        "civilite": req.body.civilite,
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "intitule": req.body.intitule,
        "adress": req.body.adress,
        "cp": req.body.cp,
        "city": req.body.city,
        "phone": req.body.phone,
        "email": req.body.email,
        "link_with": req.body.link_with,
        "photo": req.body.photo,
        "provenance": req.body.provenance,
        "date_creation": req.body.date_creation,
        "commentaires": req.body.commentaires
    }

    CustomerModel.findByIdAndUpdate(
        req.params.id, {
            $set: updateRecord
        }, {
            new: true
        },
        (err, docs) => {
            if (!err) res.send(docs)
            else console.log("Update error : ", err)
        }
    )
})

// delete
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).send("ID unknow : " + req.params.id)
    CustomerModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if (!err) res.send(docs)
            else console.log("Delete erorr : ", err)
        })
})



module.exports = router;