var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cachorrisimo' });
});

/* GET products page. */
router.get('/productos', function(req, res, next) {
  res.render('productos', { title: 'Cachorrisimo' });
});

module.exports = router;
