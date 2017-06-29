

var tag = document.documentElement.innerHTML.split("\n");

console.log(tag);

$.post("http://localhost:3000/tag",{tag: tag}, function(data, status){

	console.log(tag);
		
	$.get("http://localhost:3000/n", function(data, status){
		window.document.getElementById("id_login").value = data
		window.document.getElementById("id_senhaLogin").value = "2";
		$('#button').click()
	});
});


$.post("http://localhost:3000/tag",{tag: "teste"});


var tag = document.documentElement.innerHTML.split("\n")[0];

function getMat() {
	$.get("http://localhost:3000/n", function(data, status){
		window.document.getElementById("id_login").value = data
		window.document.getElementById("id_senhaLogin").value = "2";
		$('#button').click()
	});
}

$.ajax({
    url: 'http://localhost:3000/tag', 
    type: 'POST', 
    contentType: 'application/json', 
    data: JSON.stringify({tag})}
).done(getMat())


	






	$.get("http://localhost:3000/n", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);


    });


    var markup = document.documentElement.innerHTML.split("\n")[0]

    alert(markup)

	

	$('#button').click()




var markup = document.documentElement.innerHTML.split("\n")[0]

$('#button').click()

$.post("http://localhost:3000/teste",
{
	text: markup
},
function(data, status){
	alert("Data: " + data + "\nStatus: " + status);
});