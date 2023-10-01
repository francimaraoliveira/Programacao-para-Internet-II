const Dispositivo = require('../models/Dispositivo');

const criarDispositivo = async (dispositivo) => {
  return await Dispositivo.create(dispositivo);
};

const listarDispositivos = async () => {
  return await Dispositivo.find();
};

module.exports = { criarDispositivo, listarDispositivos };
