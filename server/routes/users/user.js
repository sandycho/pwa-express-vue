
var express = require('express');
var router = express.Router();
const User = require('../../models/user');

// creates a user
router.post('/', function(req, res) {
  res.send('creating a user');
});

// gets a user by id
router.get('/:id', function(req, res) {
  res.send(User.findById(req.params.id));
});

module.exports = router;