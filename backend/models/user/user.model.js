const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  admin: {
    type: Number,
    default: 0
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('User', schema);
