const Ambiente = require('../models/Ambiente');

const criarAmbiente = async (ambiente) => {
  return await Ambiente.create(ambiente);
};

const listarAmbientes = async () => {
  return await Ambiente.find();
};

module.exports = { criarAmbiente, listarAmbientes };
