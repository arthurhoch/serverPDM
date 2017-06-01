var mongoose = require('mongoose')

var ReclamacaoSchena = new mongoose.Schema({
	problema: {
		type: String,
		required: true,
		minlength: 5
	},
	descricao: {
		type: String,
		required: true,
		minlength: 5
	},
	lat: {
		type: Number,
		required: true
	},
	lng: {
		type: Number,
		required: true
	},
	imgpath: {
		type: String,
		required: true
	}
})


var Reclamacao = mongoose.model('Reclamacao', ReclamacaoSchena)

module.exports = { Reclamacao }