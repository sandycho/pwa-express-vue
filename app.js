
const express = require('express');
const app = express();
const authentication = require('./server/routes/middlewares/authentication');


// middleware that authenticates users
app.use(authentication);

// routes
const index = require('./server/routes/index');
const users = require('./server/routes/users/user');

app.use('/', index);
app.use('/users', users);

app.listen(4030, () => {
  console.log('Listening on port 4030!')
});