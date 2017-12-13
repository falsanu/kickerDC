const mongoose = require('mongoose');
const User = mongoose.model('User');
const Statistic = mongoose.model('Statistic');
const Hash = require('../../models/helper/hash.model');
const ServiceModel = requie('../../../env/model/Service.model');

class UserControllerModel extends ServiceModel {
  constructor() {
    super();
  }

  addUser(req, res) {
    let newUser = new User({statistic: new Statistic(), userId: new Hash()});
    newUser.save(function(err, user) {
      if(err) {
        res.send(err);
      }
      res.json(user);
    });
  }

  getUser(req, res) {
    User.find({userId})
  }

  getAllUser() {

  }

  deleteUser() {

  }

  updateUser() {

  }
}

const UserController = new UserControllerModel();
module.exports = UserController;