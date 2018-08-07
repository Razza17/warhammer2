var mongoose = require('mongoose');

var persoSchema = mongoose.Schema({
    nom: String,
    user : String
});

var Perso = mongoose.model('Perso', persoSchema);
module.exports = Perso;
