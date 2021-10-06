const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UserMessage = new Schema({
  id: Number,
  title: String,
  mensaje: String,
  date:{ type: Date , default: Date.now()}
});

module.exports = mongoose.model('User_Messages',UserMessage);



