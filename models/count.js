var mongoose = require('mongoose');

var countSchema = mongoose.Schema({
    name: String,
    value: Number,
    user : String,
    perso : String
});

var Count = mongoose.model('Count', countSchema);
module.exports = Count;
