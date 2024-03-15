var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!global.carros) global.carros = [];
  res.render('index', { title: 'lista e cadastro de carros', carros: global.carros});
});

module.exports = router;
