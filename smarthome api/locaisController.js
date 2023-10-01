// locaisController.js

const LocaisService = require('../services/locaisService');

const criarLocal = async (req, res) => {
  try {
    const novoLocal = await LocaisService.criarLocal(req.body);
    res.status(201).json(novoLocal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const listarLocais = async (req, res) => {
  try {
    const locais = await LocaisService.listarLocais();
    res.json(locais);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { criarLocal, listarLocais };
