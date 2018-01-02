const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('../../config/config');

const schema = new Schema({
  userId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  rating: {
    type: Number,
    default: 1500
  },
  pinCode: {
    type: Number
  },
  accessLevel: {
    type: Number,
    default: config.accessLevel.USER
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('User', schema);
