var express = require('express');
var router = express.Router();

var GooglePlaces = require('google-places'); 

/* GET home page. */
router.get('/', function(req, res, next) {
	res.send('SUCA!');
});

module.exports = router;







