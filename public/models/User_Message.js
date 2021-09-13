const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserMessage = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});

module.exports = mongoose.model('User_Messages',UserMessage);


