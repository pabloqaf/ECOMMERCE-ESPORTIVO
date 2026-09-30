const db = require('../config/db');

exports.criarPedido = async (usuario_id, total) => {
  const query = 'INSERT INTO pedidos (usuario_id, total) VALUES ($1, $2) RETURNING *';
  const { rows } = await db.query(query, [usuario_id, total]);
  return rows[0];
};

exports.buscarPorUsuario = async (usuario_id) => {
  const query = 'SELECT * FROM pedidos WHERE usuario_id = $1';
  const { rows } = await db.query(query, [usuario_id]);
  return rows;
};