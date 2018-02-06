var mongoose = require('mongoose');

var talentSchema = mongoose.Schema({
    nom : String,
    desc : String,
    competence : String,
    bonus : Number,
    user : String,
    perso : String

});

var Talent = mongoose.model('Talent', talentSchema);
module.exports = Talent;
