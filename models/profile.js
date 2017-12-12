var mongoose = require('mongoose');

var profileSchema = mongoose.Schema({
    nom: String,
    race: String,
    carriereA: String,
    Acarriere: String,
    user : String
});

var Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;
