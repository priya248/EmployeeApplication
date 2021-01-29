const express = require('express');
const app = express();
// const emp = require('./employee/employeeOperations');
var router = express.Router();
var mangoose = require('mongoose');
var config = require('./config');
var setupcontroller = require('./employee/employeeOperations');

// app.use('/employeeOperation', require('./employee/employeeOperations').router);

app.listen(3000, function() {
    console.log('listening on 3000')
  })

  mangoose.connect(config.getconnectionString());
  app.get('/', (req, res) => {
    res.send('Hello World')
  })
  setupcontroller(app);

  module.exports = router;
