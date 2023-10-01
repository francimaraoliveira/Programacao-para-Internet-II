// locaisService.js

const LocaisRepository = require('../repositories/locaisRepository');

const criarLocal = async (local) => {
  return await LocaisRepository.criarLocal(local);
};

const listarLocais = async () => {
  return await LocaisRepository.listarLocais();
};

module.exports = { criarLocal, listarLocais };
