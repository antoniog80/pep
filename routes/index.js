var express = require('express');
var router = express.Router();

var GooglePlaces = require('google-places'); 

/* GET home page. */
router.get('/', function(req, res, next) {
	res.send('<b>SUCA!!!!!</b>');
});

module.exports = router;







