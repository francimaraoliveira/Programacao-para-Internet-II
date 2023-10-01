const express = require('express');
const AmbientesController = require('../controllers/ambientesController');

const router = express.Router();

router.post('/ambientes', AmbientesController.criarAmbiente);
router.get('/ambientes', AmbientesController.listarAmbientes);

module.exports = router;
