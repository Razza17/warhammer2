var mongoose = require('mongoose');

var moneySchema = mongoose.Schema({
    couronnes: Number,
    pistoles: Number,
    sous: Number,
    user : String,
    perso : String
});

var Money = mongoose.model('Money', moneySchema);
module.exports = Money;
