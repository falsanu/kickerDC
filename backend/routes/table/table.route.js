module.exports = function(app) {
  let TableController = require('../../controllers/table/table.controller');

  // todoList Routes
  app.route('/table')
    .get(TableController.listAllTables)
    .post(TableController.createTable);


  app.route('/table/:tableId')
    .get(TableController.getTable)
    .put(TableController.resetTable);

  app.route('/table/occupy/:tableId')
    .get(TableController.updateTableOccupied);
};

