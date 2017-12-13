const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  soloWin: {
    type: Number
  },
  soloLose: {
    type: Number
  },
  teamWin: {
    type: Number
  },
  teamLose: {
    type: Number
  },
});

module.exports = mongoose.model('Statistic', schema);
