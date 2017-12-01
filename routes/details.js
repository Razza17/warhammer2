let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Details = require('../models/details');

mongoose.connect('mongodb://localhost:27017/wolfgang', {
    useMongoClient: true
});

//---->>>> POST DETAILS <<<<----
router.post('/', function(req, res) {
    let detail = req.body;

    Details.create(detail, function(err, detail) {
        if(err) {
            throw err;
        }
        res.json(detail);
    })
});

//---->>>> GET DETAILS <<<<----
router.get('/', function(req, res) {
    Details.find(function(err, detail) {
        if(err) {
            throw err;
        }
        res.json(detail);
    })
});

module.exports = router;
