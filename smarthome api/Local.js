// Local.js

const mongoose = require('mongoose');

const localSchema = new mongoose.Schema({
  descricao: String,
  cor: String,
  dono: String,
});

module.exports = mongoose.model('Local', localSchema);
