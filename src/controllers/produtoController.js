const db = require('../config/db');


exports.listarProdutos = async (req, res) => {
  try {
    const query = `
      SELECT p.id, p.nome, p.descricao, p.preco, p.estoque, p.imagem_url, c.nome AS categoria
      FROM produtos p
      LEFT JOIN categorias c ON p.categoria_id = c.id
      ORDER BY p.id ASC;
    `;
    const result = await db.query(query);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Erro no Banco de Dados:', error);
    res.status(500).json({ error: 'Erro ao buscar produtos no banco de dados' });
  }
};


exports.obterProdutoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('SELECT * FROM produtos WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produto' });
  }
};

exports.criarProduto = async (req, res) => {
  const { categoria_id, nome, descricao, preco, estoque, imagem_url } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO produtos (categoria_id, nome, descricao, preco, estoque, imagem_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [categoria_id, nome, descricao, preco, estoque, imagem_url]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
};