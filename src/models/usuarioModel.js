const db = require('../config/db');

exports.criarUsuario = async (nome, email, senha) => {
  const query = 'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING id, nome, email';
  const { rows } = await db.query(query, [nome, email, senha]);
  return rows[0];
};

exports.buscarPorEmail = async (email) => {
  const query = 'SELECT * FROM usuarios WHERE email = $1';
  const { rows } = await db.query(query, [email]);
  return rows[0];
};