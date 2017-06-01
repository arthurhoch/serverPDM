function createTable() { 

	$.ajax({
		url: `/reclamacoes`,
		dataType: "json"
	}).done(function(result) {

		reclamacoes = result.reclamacoes

		var table = document.getElementById("tablejson");
		var tr = document.createElement("tr");

		for (key in reclamacoes[0]) {

			if (key === 'imgpath') {
				key = 'Imagem'
			}

			if (key === 'problema') {
				key = 'Problema'
			}

			if (key === 'descricao') {
				key = 'Descrição'
			}
			
			var th = document.createElement("th");
			var txt = document.createTextNode(key);
			th.appendChild(txt);
			tr.appendChild(th);
		}
		table.appendChild(tr);

		for (var i = 0; i < reclamacoes.length; i++) {
			reclamacao = reclamacoes[i]

			var tr = document.createElement("tr");

			for (var key in reclamacao) {
				var txt = document.createTextNode(reclamacao[key]);

				var txt_tamanho = reclamacao[key].toString().split('/').length;

				if (txt_tamanho > 1) {
					var img = document.createElement("img");
					img.src = reclamacao[key]
					img.style.height = "200px";
					img.style.width = "auto";
					var td = document.createElement("td");
					td.appendChild(img);
					tr.appendChild(td);
				} else { 
					var td = document.createElement("td");
					td.appendChild(txt);
					tr.appendChild(td);
				}
			}
			table.appendChild(tr);
		}

		var t = document.getElementById("table");
		var button = document.createElement("BUTTON");
		var txt = document.createTextNode("DELETE ALL"); 
		button.id = "deleteAll";
		button.appendChild(txt);

		t.appendChild(button)

		$('#deleteAll').on( "click", function() {
			$.ajax({
				url: `/limpar/bd`,
				type: 'DELETE',
				success: function(result) {
					location.reload(); 
				}
			});
		});
	})
}
window.onload = createTable;