//opens connection to socket that lets us listen
var socket = io();

socket.on('connect', function() {
	var params = jQuery.deparam(window.location.search);
	socket.emit('join', params, function (err, wea, loc){
		if(err){
			alert(err);
			//sends the user back to the index page, window.location.href sets current page
			window.location.href = '/';
		} else{
			console.log(loc)
			console.log(wea)
			var location = jQuery(`<div id="loc"> ${loc.location} </div>`)
			var weather = jQuery(`<div id="weather"> ${wea.temp} </div>`)
			jQuery('.chat').append(location);
			jQuery('.chat').append(weather);
		}
	})
})
