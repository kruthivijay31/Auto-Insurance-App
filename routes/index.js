var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/login', function(req, res) {
	  res.render('login');
});

router.get('/signup', function(req, res) {
	  res.render('signup');
});

router.get('/calculator', function(req, res) {
	  res.render('calculator');
});
module.exports = router;
