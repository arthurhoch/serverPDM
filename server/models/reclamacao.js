var mongoose = require('mongoose')

var ReclamacaoSchena = new mongoose.Schema({
	problema: {
		type: String,
		required: true
	},
	descricao: {
		type: String,
		required: true
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
	},
	resolvido: {
		type: Boolean,
		default: false
	}
})


var Reclamacao = mongoose.model('Reclamacao', ReclamacaoSchena)

module.exports = { Reclamacao }