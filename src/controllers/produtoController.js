const db = require('../config/db');

// Listar todos os produtos
exports.listarProdutos = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM produtos');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
};

// Obter produto por ID
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

// Criar novo produto
exports.criarProduto = async (req, res) => {
  const { nome, descricao, preco, estoque } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO produtos (nome, descricao, preco, estoque) VALUES ($1, $2, $3, $4) RETURNING *',
      [nome, descricao, preco, estoque]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
};