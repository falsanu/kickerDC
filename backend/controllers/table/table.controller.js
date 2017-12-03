const mongoose = require('mongoose');
const Table = mongoose.model('Table');
const Hash = require('../../models/helper/hash.model');


const occupiedTime = 1000 * 60 * 2;

function occupyTable(tableId) {

  setTimeout(() => {
    Table.findOneAndUpdate({tableId: tableId}, {occupied: false}, function(err, table) {
      if (err) {
        console.error(err);
      }
    });
  }, occupiedTime);
}

exports.listAllTables = function(req, res) {
  Table.find({}, function(err, tables) {
    if (err) {
      res.send(err);
    }
    res.json(tables);
  });
};

exports.createTable = function(req, res) {
  let newTable = new Table({tableId: Hash.constructor.generate()});
  newTable.save(function(err, table) {
    if (err) {
      res.send(err);
    }
    res.json(table);
  });
};

exports.getTable = function(req, res) {
  Table.find({tableId: req.params.tableId}, function(err, table) {
    if (err) {
      res.send(err);
    }
    res.json(table);
  });
};

exports.resetTable = function(req, res) {
  Table.findOneAndUpdate({tableId: req.params.tableId}, {occupiedUntil: new Date().getTime(), occupied: false}, function(err, table) {
    if (err)
      res.send(err);
    res.json(table);
  });
};

exports.updateTableOccupied = function (req, res) {
  Table.find({tableId: req.params.tableId}, function(err, tables) {
    if(err) {
      res.send(err);
    }
    tables.forEach((table) => {
      if (table.occupied === false) {
        let occupiedUntil = new Date().getTime() * occupiedTime;
        Table.findOneAndUpdate({tableId: req.params.tableId}, {occupiedUntil: occupiedUntil, occupied: true}, function(err, table) {
          if(err) {
            res.send(err);
          }
          occupyTable(req.params.tableId);
          res.json(table);
        });
      } else {
        res.send(table);
      }
    });
  })
};