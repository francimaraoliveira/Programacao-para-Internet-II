const mongoose = require('mongoose');

const dispositivoSchema = new mongoose.Schema({
  descricao: String,
  online: Boolean,
  ligado: Boolean,
  ambiente: { type: mongoose.Schema.Types.ObjectId, ref: 'Ambiente' },
  ultimaComunicacao: Date,
});

module.exports = mongoose.model('Dispositivo', dispositivoSchema);
