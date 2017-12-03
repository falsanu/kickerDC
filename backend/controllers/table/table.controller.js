const mongoose = require('mongoose');
const Table = mongoose.model('Table');
const Hash = require('../../models/helper/hash.model');

exports.listAllTables = function(req, res) {
  Table.find({}, function(err, tables) {
    if (err) {
      res.send(err);
    }
    res.json(tables);
  });
};

exports.createTable = function(req, res) {
  let newTable= new Table({id: Hash.constructor.generate()});
  newTable.save(function(err, table) {
    if (err) {
      res.send(err);
    }
    res.json(table);
  });
};

exports.getTable = function(req, res) {
  Table.findById(req.params.tableId, function(err, table) {
    if (err) {
      res.send(err);
    }
    res.json(table);
  });
};


exports.updateTableState = function(req, res) {
  Table.findOneAndUpdate({id: req.params.tableId}, req.body, {new: true}, function(err, table) {
    if (err)
      res.send(err);
    res.json(table);
  });
};
