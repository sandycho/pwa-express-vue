
const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');
var expressVue = require('express-vue');
const authentication = require('./server/routes/middlewares/authentication');

app.use(bodyParser.json()); // for parsing application/json

// middleware that authenticates users
app.use(authentication);

// set up view engine
const vueOptions = {
    rootPath: path.join(__dirname, './server/views'),
    layout: {
        start: '<div id="app">',
        end: '</div>'
    }
};

const expressVueMiddleware = expressVue.init(vueOptions);
app.use(expressVueMiddleware);

// routes
const index = require('./server/routes/index');
const users = require('./server/routes/users/user');

app.use('/', index);
app.use('/users', users);

app.listen(4030, () => {
  console.log('Listening on port 4030!')
});

