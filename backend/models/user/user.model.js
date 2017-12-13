const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  userId: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  userApiToken: {
    type: String
  },
  password: {
    type: String
  },
  rating: {
    type: Number
  },
  pinCode: {
    type: Number
  },
  statistic: {
    type: [Statistic]
  }
});

module.exports = mongoose.model('User', schema);
