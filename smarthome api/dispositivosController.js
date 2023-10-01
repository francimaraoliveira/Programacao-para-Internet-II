const Dispositivo = require('../models/Dispositivo');
const DispositivosService = require('../services/dispositivosService');

const criarDispositivo = async (req, res) => {
  try {
    const novoDispositivo = await DispositivosService.criarDispositivo(req.body);
    res.status(201).json(novoDispositivo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const listarDispositivos = async (req, res) => {
  try {
    const dispositivos = await DispositivosService.listarDispositivos();
    res.json(dispositivos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { criarDispositivo, listarDispositivos };
