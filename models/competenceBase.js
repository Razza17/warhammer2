var mongoose = require('mongoose');

var competenceBaseSchema = mongoose.Schema({
    nom: String,
    carac : String,
    acquis : Boolean,
    dix : Boolean,
    vingt : Boolean,
    bonus : Number,
    user : String,
    perso : String

});

var CompetenceBase = mongoose.model('CompetenceBase', competenceBaseSchema);
module.exports = CompetenceBase;
