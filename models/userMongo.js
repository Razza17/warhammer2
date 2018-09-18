const mongoose = require('mongoose');

const userMongoSchema = mongoose.Schema({
  nom: String,
  prenom: String,
  pseudo: String,
  email: String,
  password: String
});

const UserMongo = mongoose.model('UserMongo', userMongoSchema);
module.exports = UserMongo;
