let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Count = require('../models/count');

mongoose.connect('mongodb://localhost:27017/wolfgang', {
    useMongoClient: true
});

//---->>>> POST COUNT <<<<----
router.post('/', function(req, res) {
    let count = req.body;

    Count.create(count, function(err, counting) {
        if(err) {
            throw err;
        }
        res.json(counting);
    })
});

//---->>>> GET COUNT <<<<----
router.get('/', function(req, res) {
    Count.find(function(err, counting) {
        if(err) {
            throw err;
        }
        res.json(counting);
    })
});

//---->>>> UPDATE COUNT <<<<----
router.put('/:_id', function(req, res) {
    let newData = req.body;

    let update = {
        '$set': {
            value: newData.value
        }
    };

    let options = {new: false};

    Count.updateOne({name: newData.name}, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
});

module.exports = router;
