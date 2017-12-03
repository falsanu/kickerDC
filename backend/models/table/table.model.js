const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  tableId: {
    type: String,
    required: true
  },
  occupied: {
    type: Boolean,
    required: true,
    default: false
  },
  occupiedUntil: {
    type: Number,
    default: new Date().getTime()
  }
});

module.exports = mongoose.model('Table', schema);
