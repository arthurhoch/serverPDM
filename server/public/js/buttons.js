$(document).ready(function(){
	$('#mapButton').on( "click", function() {
		document.getElementById('table').style.display = "none";
		document.getElementById('map').style.display = "";
	});
	$('#tableButton').on( "click", function() {
		document.getElementById('table').style.display = "";
		document.getElementById('map').style.display = "none";
	});

});