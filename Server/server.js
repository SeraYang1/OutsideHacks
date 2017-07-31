const geocode = require('../geocoder/geocoder.js')
const weather = require('../weather/weather.js')
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
	console.log('New Location');
	socket.on('join', (params, callback) => {
		if (params.loc.trim().length == 0) {
			callback("Need to enter a location")
		} else {
			geocode.geocodeAddress(params.loc, (error, loc) => {
				if (error) {
					callback("Cannot find location");
				} else {
					weather.getWeather(loc.lat, loc.long, (error, wea) => {
						if (error) {
							callback("Cannot get weather");
						} else {
							callback(null, wea, loc);
						}
					})
				}
			})
		}
	})
})

server.listen(port, () => {
	console.log(`Started on port ${port}`)
})
