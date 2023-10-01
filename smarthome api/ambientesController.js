const Ambiente = require('../models/Ambiente');
const AmbientesService = require('../services/ambientesService');

const criarAmbiente = async (req, res) => {
  try {
    const novoAmbiente = await AmbientesService.criarAmbiente(req.body);
    res.status(201).json(novoAmbiente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const listarAmbientes = async (req, res) => {
  try {
    const ambientes = await AmbientesService.listarAmbientes();
    res.json(ambientes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { criarAmbiente, listarAmbientes };
