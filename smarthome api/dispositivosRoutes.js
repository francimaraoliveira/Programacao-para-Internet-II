const express = require('express');
const DispositivosController = require('../controllers/dispositivosController');

const router = express.Router();

router.post('/dispositivos', DispositivosController.criarDispositivo);
router.get('/dispositivos', DispositivosController.listarDispositivos);

module.exports = router;
