const geocode = require('../geocoder/geocoder.js')
const yelp = require('../yelp/yelp.js')
const path = require('path');
const http = require('http');
const express = require('express')
const publicPath = path.join(__dirname, "../public");
const socketIO = require('socket.io');
const lyft = require('node-lyft');

//sets up connection ports
const port = process.env.PORT || 3000;
var app = express();
app.set('port', process.env.PORT || 3000);
var server = http.createServer(app)
var io = socketIO(server);

app.use(express.static(publicPath))

io.on('connection', (socket) => {
	socket.on('join', (params, second, callback) => {
		console.log("params: ", params)

		if (second) {
			geocode.latLong(params, second, (error, loc) => {
				if (error) {
					callback("Cannot find location");
				} else {
					yelp.search(loc.location, (error, restaurant) => {
						console.log(loc.location)
						if (error) {
							console.log(error)
							callback("Cannot get restaurant");
						} else {
							callback(null, restaurant);
						}
					})
				}
			})
		} else {
			if (params.trim().length == 0) {
				callback("Need to enter a location")
			} else {
				geocode.geocodeAddress(params, (error, loc) => {
					if (error) {
						callback("Cannot find location");
					} else {
						yelp.search(params, (error, restaurant) => {
							if (error) {
								callback("Cannot get restaurant");
							} else {
								callback(null, restaurant);
							}
						})
					}
				})
			}
		}
	})
})


server.listen(port, () => {
	console.log(`Started on port ${port}`)
})
