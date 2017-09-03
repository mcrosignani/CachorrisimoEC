var express = require('express');
var router = express.Router();

/* GET products page. */
router.get('/productos', function(req, res, next) {
  res.render('productos', { title: 'Cachorrisimo' });
});

module.exports = router;
