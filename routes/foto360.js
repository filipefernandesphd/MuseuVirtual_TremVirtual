var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('foto360', {title: 'Foto 360'}); // para acessar aquivos .jade
});

module.exports = router;
