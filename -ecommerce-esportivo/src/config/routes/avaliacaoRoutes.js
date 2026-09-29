const express = require('express');
const router = express.Router();
const avaliacaoController = require('../controllers/avaliacaoController');

router.get('/produto/:id', avaliacaoController.listarAvaliacoes);
router.post('/', avaliacaoController.criarAvaliacao);

module.exports = router;