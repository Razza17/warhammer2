var mongoose = require('mongoose');

var caracteristiqueSchema = mongoose.Schema({
    type: String,
    cc: Number,
    ct: Number,
    f: Number,
    e: Number,
    ag: Number,
    int: Number,
    fm: Number,
    soc: Number,
    a: Number,
    b: Number,
    bf: Number,
    be: Number,
    m: Number,
    mag: Number,
    pf: Number,
    pd: Number,
    user: String,
    perso : String
});

var Caracteristique = mongoose.model('Caracteristique', caracteristiqueSchema);
module.exports = Caracteristique;
