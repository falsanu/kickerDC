const mongoose = require('mongoose');
const Table = mongoose.model('Table');
const Hash = require('../../models/helper/hash.model');
const ServiceModel = require('../../../env/model/Service.model');

const occupiedTime = 1000 * 60 * 30;  //ms s m - 30min


function occupyTable(tableId) {

  setTimeout(() => {
    Table.findOneAndUpdate({tableId: tableId}, {occupied: false}, function(err, table) {
      if (err) {
        console.error(err);
      }
      // TableController.deps.sockets.emit('table::occupied::false', table);
    });
  }, occupiedTime);
}

class TableControllerModel extends ServiceModel {
  constructor() {
    super();
  }

  listAllTables(req, res) {
    Table.find({}, function(err, tables) {
      if (err) {
        res.send(err);
      }
      res.json(tables);
    });
  }

  createTable(req, res) {
    let newTable = new Table({tableId: Hash.constructor.generate()});
    newTable.save(function(err, table) {
      if (err) {
        res.send(err);
      }
      res.json(table);
    });
  }

  getTable(req, res) {
    Table.find({tableId: req.params.tableId}, function(err, table) {
      if (err) {
        res.send(err);
      }
      res.json(table);
    });
  }

  resetTable(req, res) {
    Table.findOneAndUpdate({tableId: req.params.tableId}, {occupiedUntil: new Date().getTime(), occupied: false}, function(err, table) {
      if (err)
        res.send(err);
      res.json(table);
    });
  }

  updateTableOccupied(req, res) {
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
            // TableController.deps.sockets.emit('table::occupied::true', table);
            occupyTable(req.params.tableId);
            res.json(table);
          });
        } else {
          res.send(table);
        }
      });
    })
  }
}

const TableController = new TableControllerModel();

module.exports = TableController;