
var express = require('express');
var router = express.Router();
const User = require('../../models/user');
const OrmBasic = require('../../models/ormBasic');

// creates a user
router.post('/', function (req, res) {
  var user = new User({ name: req.body.name });
  res.send(user.save());
});

// gets a user by id
router.get('/:id', function (req, res) {
  res.send(User.getById(req.params.id));
});

/**
 * Views
 */
router.get('/', (req, res, next) => {
  const data = {
    name: 'Sandy Chuchuca'

  };
  const vueOptions = {
    head: {
      title: 'Page Title',
      meta: [
        { property: 'og:title', content: 'User Raw Page' },
        { name: 'twitter:title', content: 'User Raw Page | Twitter}' }
      ]
    }
  }
  res.renderVue('user', data, vueOptions);
});

module.exports = router;