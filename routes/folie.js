let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Folie = require('../models/folie');

mongoose.connect('mongodb://localhost:27017/wolfgang', {
    useMongoClient: true
});

//---->>>> POST FOLIE <<<<----
router.post('/', function(req, res) {
    let inv = req.body;

    Folie.create(inv, function(err, folie) {
        if(err) {
            throw err;
        }
        res.json(folie);
    })
});

//---->>>> GET FOLIE <<<<----
router.get('/', function(req, res) {
    Folie.find(function(err, folie) {
        if(err) {
            throw err;
        }
        res.json(folie);
    })
});

//---->>>> DELETE FOLIE <<<<----
router.delete('/:_id', function(req, res) {
    let query = {_id: req.params._id};

    Folie.remove(query, function(err, folie) {
        if(err) {
            throw err;
        }
        res.json(folie);
    })
});

//---->>>> UPDATE FOLIE <<<<----
router.put('/:_id', function(req, res) {
    let newData = req.body;

    let update = {
        '$set': {
            nom: newData.nom,
            quantite: newData.quantite,
            encombrement: newData.encombrement
        }
    };

    let options = {new: false};

    Folie.updateOne({_id: newData._id}, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
});

module.exports = router;
