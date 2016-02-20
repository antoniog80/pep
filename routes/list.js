var express = require('express');
var router = express.Router();

var GooglePlaces = require('google-places'); 
var places = new GooglePlaces('AIzaSyCvp1MA505L09uy_44cSobXu8YyWUjUyIw');

/* GET home page. */
router.get('/', function(req, res, next) {
	/*
	Via Fabio Severo 63, Trieste - location:[45.6563292, 13.7843213]
	http://localhost:3000/list?kw=Pizzeria&r=5000&lat=45.6563292&lon=13.7843213
	*/
	
	var kw = req.param('kw');
	var r = req.param('r');
	var lat = req.param('lat');
	var lon = req.param('lon');
	
	places.search({keyword: kw, radius: r, location:[lat, lon]}, function(err, response) {
		//console.log(response.results);
		res.send(response);
	});

});

module.exports = router;
