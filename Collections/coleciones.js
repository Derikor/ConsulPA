const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserMessage = new Schema({
  author: ObjectId,
  message: String,
  date: Date
},{timestamps:true});

module.exports = mongoose.model('')
