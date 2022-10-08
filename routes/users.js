// Student ID: 300952167
// Name: Yi Chen
// Data: Oct 07, 2022
// File Name: users.js

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
