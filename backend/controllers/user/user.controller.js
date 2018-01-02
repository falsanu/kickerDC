const mongoose = require('mongoose');
const User = mongoose.model('User');
const Statistic = mongoose.model('Statistic');
const Hash = require('../../models/helper/hash.model');
const ServiceModel = require('../../../env/model/Service.model');

let hasRegisteredUsers = false;

function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}

class UserControllerModel extends ServiceModel {
  constructor() {
    super();
  }

  addFirstUser(req, res) {
    let self = this;
    User.find({}, function(err, user) {
      if(user.length === 0) {
        if(validateEmail(req.body.email)) {
          let newUser = new User({
            email: req.body.email,
            admin: 1,
            name: req.body.name,
            userId: Hash.constructor.generate()
          });
          newUser.save(function (err, user) {
            if (err) {
              res.send(err);
            }
            hasRegisteredUsers = true;
            res.json(user);
          });
        } else{
          res.send({
            "errors": {
              "email": {
                "message": "Path `email` has to be valid.",
                "name": "ValidatorError",
                "properties": {"type": "required", "message": "Path `{PATH}` has to be valid.", "path": "email"},
                "kind": "required",
                "path": "email",
                "$isValidatorError": true
              }
            },
            "_message": "User validation failed",
            "message": "User validation failed: email: Path `email` has to be valid.",
            "name": "ValidationError"
          });
        }
      } else {
        hasRegisteredUsers = true;
        self.addUser(req, res);
      }
    });

  }

  addUser(req, res) {
    if(hasRegisteredUsers === false) {
      UserController.addFirstUser(req, res)
    } else {
      if (validateEmail(req.body.email)) {
        User.find({email: req.body.email}, function (err, user) {
          if (user.length === 0) {
            let newUser = new User({email: req.body.email, name: req.body.name, userId: Hash.constructor.generate()});
            newUser.save(function (err, user) {
              if (err) {
                res.send(err);
              }
              res.json(user);
            });
          } else {
            res.send({
              "errors": {
                "email": {
                  "message": "Path `email` is already given.",
                  "name": "ValidatorError",
                  "properties": {"type": "required", "message": "Path `{PATH}` is already given.", "path": "email"},
                  "kind": "required",
                  "path": "email",
                  "$isValidatorError": true
                }
              },
              "_message": "User validation failed",
              "message": "User validation failed: email: Path `email` is already given.",
              "name": "ValidationError"
            });
          }
        });
      } else {
        res.send({
          "errors": {
            "email": {
              "message": "Path `email` has to be valid.",
              "name": "ValidatorError",
              "properties": {"type": "required", "message": "Path `{PATH}` has to be valid.", "path": "email"},
              "kind": "required",
              "path": "email",
              "$isValidatorError": true
            }
          },
          "_message": "User validation failed",
          "message": "User validation failed: email: Path `email` has to be valid.",
          "name": "ValidationError"
        });
      }
    }
  }

  getUser(req, res) {
    User.find({userId: req.params.userId}, function(err, user) {
      if(err) {
        res.send(err);
      }
      res.json(user);
    });
  }

  getAllUser(req, res) {
    User.find({}, function (err, users) {
      if (err) {
        res.send(err);
      }
      res.json(users);
    });
  }

  deleteUser(req, res) {
    User.find({userId: req.query.userId}, function(err, user) {
      if(err) {
        res.send(err);
      }
      console.log(user);
      if(user.length > 0 && user[0].admin > 0) {
       User.findOneAndRemove({userId: req.query.deleteUserId}, function (err, user) {
       if(err) {
       res.send(err);
       }
        res.json(user);
       });
      } else {
        res.send({
          "errors": {
            "admin": {
              "message": "User got no permission to delete other user.",
              "name": "PermissionError",
              "properties": {"type": "permission", "message": "User got no permission to delete other user.", "path": "admin"},
              "kind": "permission",
              "path": "admin",
              "$isValidatorError": false
            }
          },
          "_message": "User validation failed",
          "message": "User got no permission to delete other user.",
          "name": "PermissionError"
        })
      }
    });
  }
}

const UserController = new UserControllerModel();
module.exports = UserController;