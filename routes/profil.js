let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Profile = require('../models/profile');

mongoose.connect('mongodb://localhost:27017/wolfgang', {
    useMongoClient: true
});

//---->>>> POST PROFILE <<<<----
router.post('/', function(req, res) {
    let profil = req.body;

    Profile.create(profil, function(err, profile) {
        if(err) {
            throw err;
        }
        res.json(profile);
    })
});

//---->>>> GET PROFILE <<<<----
router.get('/', function(req, res) {
    Profile.find(function(err, profile) {
        if(err) {
            throw err;
        }
        res.json(profile);
    })
});

//---->>>> UPDATE PROFILE <<<<----
router.put('/:_id', function(req, res) {
    let newData = req.body;
    let query = req.params._id;

    let update = {
        '$set': {
            carriereA: newData.carriereA,
            Acarriere: newData.Acarriere
        }
    };

    let options = {new: false};

    Profile.findOneAndUpdate(query, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
});

module.exports = router;
