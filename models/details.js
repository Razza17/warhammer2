var mongoose = require('mongoose');

var detailSchema = mongoose.Schema({
    age: Number,
    sexe: String,
    yeux: String,
    taille: String,
    cheveux: String,
    poids: String,
    signeAstral: String,
    fraterie: String,
    naissance: String,
    distinction: String,
    user: String
});

var Details = mongoose.model('Details', detailSchema);
module.exports = Details;
