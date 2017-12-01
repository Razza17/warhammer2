var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    "nom" : String,
    "pseudo" : String,
    "email" : String,
    "password" : String

});

var User = mongoose.model('User', userSchema);
module.exports = User;
