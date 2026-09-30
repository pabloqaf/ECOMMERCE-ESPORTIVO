const db = require('../config/db');

exports.buscarTodos = async () => {
  const { rows } = await db.query('SELECT * FROM produtos');
  return rows;
};

exports.buscarPorId = async (id) => {
  const { rows } = await db.query('SELECT * FROM produtos WHERE id = $1', [id]);
  return rows[0];
};