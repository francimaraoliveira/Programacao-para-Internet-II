// locaisRoutes.js

const express = require('express');
const LocaisController = require('../controllers/locaisController');

const router = express.Router();

router.post('/locais', LocaisController.criarLocal);
router.get('/locais', LocaisController.listarLocais);

module.exports = router;
