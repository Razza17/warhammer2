var mongoose = require('mongoose');

var moneySchema = mongoose.Schema({
    nom: String,
    value: Number
});

var Money = mongoose.model('Money', moneySchema);
module.exports = Money;
