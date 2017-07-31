//opens connection to socket that lets us listen
var socket = io();

socket.on('connect', function() {
	console.log("HERE")
	var params = jQuery.deparam(window.location.search);
	console.log(params)
	socket.emit('join', params, function (err, weather){
		if(err){
			alert(err);
			//sends the user back to the index page, window.location.href sets current page
			window.location.href = '/';
		} else {
			console.log('no error')
			console.log(weather)
		}
	})
})
