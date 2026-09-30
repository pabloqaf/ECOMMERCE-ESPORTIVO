const pedidoModel = require('../models/pedidoModel');

exports.criarPedido = async (req, res) => {
  const { usuario_id, total } = req.body;
  try {
    const novoPedido = await pedidoModel.criarPedido(usuario_id, total);
    res.status(201).json(novoPedido);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao criar pedido' });
  }
};

exports.listarMeusPedidos = async (req, res) => {
  const { usuario_id } = req.params;
  try {
    const pedidos = await pedidoModel.buscarPorUsuario(usuario_id);
    res.json(pedidos);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao procurar pedidos' });
  }
};