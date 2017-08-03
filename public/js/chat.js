//opens connection to socket that lets us listen
var socket = io();

socket.on('connect', function() {
	var params = jQuery.deparam(window.location.search).loc;
	if (!params && params.trim().length == 0) {
		if (!navigator.geolocation) {
			error('Need to enter location or allow geolocation')
		} else {
			navigator.geolocation.getCurrentPosition(passOn, error)
		}
	} else {
		passOn(params)
	}
})

function error(err) {
	alert(err)
	window.location.href = '/'
}

function passOn(params) {
	if (params.coords) {
		socket.emit('join', params.coords.latitude, params.coords.longitude, function(err, restaurants) {
			if (err) {
				error(err)
			} else {
				var location = jQuery(`<div id="loc"> ${restaurants} </div>`)
				jQuery('.chat').append(location);
			}
		})
	}else{
		socket.emit('join', params, null, function(err, restaurants) {
			if (err) {
				error(err)
			} else {
				var location = jQuery(`<div id="loc"> ${restaurants} </div>`)
				jQuery('.chat').append(location);
			}
		})
	}
}
