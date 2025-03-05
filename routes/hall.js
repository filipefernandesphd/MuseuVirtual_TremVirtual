var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hall' , {title: 'Hall'}); // para acessar aquivos .jade
  // res.sendFile(path.join(__dirname, '../views', 'hall.html')); // para acessar arquivos .html
});

module.exports = router;
