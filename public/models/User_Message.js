const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserMessage = new Schema({
  title: String,
  mensaje: String,

});

module.exports = mongoose.model('User_Messages',UserMessage);


