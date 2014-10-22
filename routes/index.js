var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'clocks' });
});
router.get('/bin', function(req, res) {
  res.render('bin', { title: 'binary clock' });
});
router.get('/hex', function(req, res) {
  res.render('hex', { title: 'hexadecimal clock' });
});

module.exports = router;
