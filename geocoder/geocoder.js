const request = require('request');

var geocodeAddress = (address, callback) => {
	var encoded = encodeURIComponent(address)
	//request calls server to fetch information, then performs callback after information has been saved
	request({
		url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encoded,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback("Could not connect to google servers");
		} else if (body.status === "ZERO_RESULTS") {
			//body has all the useful information, including error and actual results
			callback("Address does not exist");
		} else if (body.status === "OK") {
			callback(undefined, {
				location: body.results[0].formatted_address,
				lat: body.results[0].geometry.location.lat,
				long: body.results[0].geometry.location.lng
			})
		} else {
			callback("Could not connect to google servers")
		}
	});
}

var latLong = (lat, long, callback) => {
	var encoded = encodeURIComponent(lat, long)
	request({
		url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + lat +'+'+long,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback("Could not connect to google servers");
		} else if (body.status === "ZERO_RESULTS") {
			//body has all the useful information, including error and actual results
			callback("Address does not exist");
		} else if (body.status === "OK") {
			callback(undefined, {
				location: body.results[0].formatted_address,
				lat: body.results[0].geometry.location.lat,
				long: body.results[0].geometry.location.lng
			})
		} else {
			callback("Could not connect to google servers")
		}
	})
}

module.exports = {
	geocodeAddress,
	latLong
}
