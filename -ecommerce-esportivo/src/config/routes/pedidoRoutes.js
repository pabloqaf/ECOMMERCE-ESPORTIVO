const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

router.post('/', pedidoController.criarPedido);
router.get('/usuario/:usuario_id', pedidoController.listarMeusPedidos);

module.exports = router;    