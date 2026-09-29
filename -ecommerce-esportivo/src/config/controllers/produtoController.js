const db = require('../config/db');

exports.listarProdutos = async (req, res) => {
  try {
    const resultado = await db.query('SELECT * FROM produtos');
    res.json(resultado.rows);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao buscar produtos' });
  }
};

exports.obterProdutoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const resultado = await db.query('SELECT * FROM produtos WHERE id = $1', [id]);
    if (resultado.rows.length === 0) {
      return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }
    res.json(resultado.rows[0]);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao buscar o produto' });
  }
};

exports.criarProduto = async (req, res) => {
  const { categoria_id, nome, descricao, preco, estoque, imagem_url } = req.body;
  try {
    const resultado = await db.query(
      'INSERT INTO produtos (categoria_id, nome, descricao, preco, estoque, imagem_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [categoria_id, nome, descricao, preco, estoque, imagem_url]
    );
    res.status(201).json(resultado.rows[0]);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao cadastrar produto' });
  }
};const db = require('../config/db');

exports.listarProdutos = async (req, res) => {
  try {
    const resultado = await db.query('SELECT * FROM produtos');
    res.json(resultado.rows);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao buscar produtos' });
  }
};

exports.obterProdutoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const resultado = await db.query('SELECT * FROM produtos WHERE id = $1', [id]);
    if (resultado.rows.length === 0) {
      return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }
    res.json(resultado.rows[0]);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao buscar o produto' });
  }
};

exports.criarProduto = async (req, res) => {
  const { categoria_id, nome, descricao, preco, estoque, imagem_url } = req.body;
  try {
    const resultado = await db.query(
      'INSERT INTO produtos (categoria_id, nome, descricao, preco, estoque, imagem_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [categoria_id, nome, descricao, preco, estoque, imagem_url]
    );
    res.status(201).json(resultado.rows[0]);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao cadastrar produto' });
  }
};