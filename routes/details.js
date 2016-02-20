var express = require('express');
var router = express.Router();

var GooglePlaces = require('google-places'); 
var places = new GooglePlaces('AIzaSyCvp1MA505L09uy_44cSobXu8YyWUjUyIw');

/* GET home page. */
router.get('/', function(req, res, next) {
	/*
	http://localhost:3000/details?id=ChIJmWa98R5re0cRLlGyi_eCFMk
	*/
	var id = req.param('id');
	//places.search({keyword: 'Pizzeria'}, function(err, response) {

	places.details({placeid: id}, function(err, response) {
		//console.log(response.result.website);
		res.send(response);
		});
	//});

});

module.exports = router;