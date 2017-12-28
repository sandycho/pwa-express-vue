
var express = require('express');
var router = express.Router();

var authentication = require('./middlewares/authentication');

// middleware that authenticates the user
router.use(authentication);

// define the home page route
router.get('/', function(req, res) {
  res.send('home');
});

module.exports = router;

