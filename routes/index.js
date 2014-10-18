var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'clocks' });
});

router.get('/binary', function(req, res) {
  res.render('binary', { title: 'binary clock' });
});

module.exports = router;
