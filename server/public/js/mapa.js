function initMap() {

	var lat = -33.9
	var lng = 151.2

	$.getJSON('https://geoip-db.com/json/geoip.php?jsonp=?') 
	.done (function(location) {
		lat = location.latitude;
		lng = location.longitude;

		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 10,
			center: {lat, lng}
		});

		setMarkers(map);
	});
}

function setMarkers(map) {

	var shape = {
		coords: [1, 1, 1, 20, 18, 20, 18, 1],
		type: 'poly'
	};

	$.ajax({
		url: `/markers`,
		dataType: "json"
	}).done(function(localizacoes) {

		localizacoes = localizacoes.result

		for (var i = 0; i < localizacoes.length; i++) {
			var localizacao = localizacoes[i];


			url = window.location.href;
			url = url.split("/");
			url = url[0] + "//" + url[2]

			var image = {
				url:  url + localizacao.imgpath,
				scaledSize: new google.maps.Size(64, 64),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(0, 0)
			};

			var marker = new google.maps.Marker({
				position: {lat: localizacao.lat, lng: localizacao.lng},
				animation: google.maps.Animation.BOUNCE,
				map: map,
				icon: image,
				title: localizacao.problema
			});

			google.maps.event.addListener(marker, 'click', function() {
				map.panTo(this.getPosition());
				map.setZoom(17);
			});
		}
	});
}
