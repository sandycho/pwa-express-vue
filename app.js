
const express = require('express')
const app = express()

// routes
var index = require('./server/routes/index');

app.use('/', index);

app.listen(4030, function () {
  console.log('Listening on port 4030!')
})