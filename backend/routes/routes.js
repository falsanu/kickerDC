module.exports = function(app) {
  let TableController = require('../controllers/table/table.controller');
  // let UserController = require('../controllers/user/user.controller');

  // table routes
  app.route('/table')
    .get(TableController.listAllTables)
    .post(TableController.createTable);

  app.route('/table/:tableId')
    .get(TableController.getTable)
    .put(TableController.resetTable)
    .patch(TableController.updateTableOccupied);

  // user routes
  // app.route('/user')
  //   .get(UserController.getAllUser);
//
  // app.route('/user/:userId')
  //   .get(UserController.getUser)
  //   .post(UserController.addUser)
  //   .delete(UserController.deleteUser);

};

