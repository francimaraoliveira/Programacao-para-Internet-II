// locaisRepository.js

const Local = require('../models/Local');

const criarLocal = async (local) => {
  return await Local.create(local);
};

const listarLocais = async () => {
  return await Local.find();
};

module.exports = { criarLocal, listarLocais };
