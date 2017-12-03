module.exports = function(app) {
  let tableCtrl = require('../../controllers/table/table.controller');

  // todoList Routes
  app.route('/table')
    .get(tableCtrl.listAllTables)
    .post(tableCtrl.createTable);


  app.route('/table/:tableId')
    .get(tableCtrl.getTable)
    .put(tableCtrl.updateTableState);
};

