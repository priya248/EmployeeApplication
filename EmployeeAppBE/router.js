var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Welcome to Node JS V1');
});

router.use('/employeeOperation', require('./employee/employeeOperations').router);

module.exports.router = router;
