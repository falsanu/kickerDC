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
  lastTimeOccupied: {
    type: Date,
    default: new Date().getTime() - (1000 * 60 * 30)
  }
});

module.exports = mongoose.model('Table', schema);
