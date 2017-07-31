const geocode = require('../geocoder/geocoder.js')
const weather = require('../weather/weather.js')
const apiLyftController = require('../controllers/apiLyftController.js')
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

//sets up lyft info
// let defaultClient = lyft.ApiClient.instance;
// // Configure OAuth2 access token for authorization: Client Authentication
// let clientAuth = defaultClient.authentications[‘Client Authentication’];
// clientAuth.accessToken = ‘YOUR ACCESS TOKEN’;
// let apiInstance = new lyft.PublicApi();

app.use(express.static(publicPath))

io.on('connection', (socket) => {
	console.log('New user connected');

	socket.on('join', (params, callback) => {
    callback();
		// apiInstance.getRideTypes(37.7763, -122.3918).then((data) => {
		// 	console.log(‘API called successfully.Returned data: ‘+data);
		// }, (error) => {
		// 	console.error(error);
		// });
	})
})

server.listen(port, () => {
	console.log(`Started on port ${port}`)
})
