
var express = require('express');
var router = express.Router();
const User = require('../../models/user');
const OrmBasic = require('../../models/ormBasic');

// creates a user
router.post('/', function(req, res) {
  var user = new User({name: req.body.name});
  res.send(user.save());
});

// gets a user by id
router.get('/:id', function(req, res) {
  res.send(User.getById(req.params.id));
});

module.exports = router;