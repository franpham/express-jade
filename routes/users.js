"use strict";

var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res) {
  res.send('get one user');
});

router.post('/', function(req, res) {
  res.send('creating a user');
});

module.exports = router;   // export router for app.js