const db = require('../config/db');

exports.listarAvaliacoes = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query('SELECT * FROM avaliacoes WHERE produto_id = $1', [id]);
    res.json(rows);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao procurar avaliações' });
  }
};

exports.criarAvaliacao = async (req, res) => {
  const { produto_id, usuario_id, nota, comentario } = req.body;
  try {
    const { rows } = await db.query(
      'INSERT INTO avaliacoes (produto_id, usuario_id, nota, comentario) VALUES ($1, $2, $3, $4) RETURNING *',
      [produto_id, usuario_id, nota, comentario]
    );
    res.status(201).json(rows[0]);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao enviar avaliação' });
  }
};