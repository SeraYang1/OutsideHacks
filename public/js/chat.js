//opens connection to socket that lets us listen
var socket = io();

socket.on('connect', function() {
	var params = jQuery.deparam(window.location.search);
	socket.emit('join', params, function (err, restaurants){
		if(err){
			alert(err);
			//sends the user back to the index page, window.location.href sets current page
			window.location.href = '/';
		} else{
			console.log(restaurants)
			var location = jQuery(`<div id="loc"> ${restaurants} </div>`)
			jQuery('.chat').append(location);
		}
	})
})
