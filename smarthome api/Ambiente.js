const mongoose = require('mongoose');

const ambienteSchema = new mongoose.Schema({
  descricao: String,
  cor: String,
  local: { type: mongoose.Schema.Types.ObjectId, ref: 'Local' },
});

module.exports = mongoose.model('Ambiente', ambienteSchema);
