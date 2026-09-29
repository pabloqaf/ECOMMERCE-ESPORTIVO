const usuarioModel = require('../models/usuarioModel');

exports.registro = async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const usuario = await usuarioModel.criarUsuario(nome, email, senha);
    res.status(201).json({ mensagem: 'Usuário registado com sucesso!', usuario });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao registar usuário' });
  }
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const usuario = await usuarioModel.buscarPorEmail(email);
    if (!usuario || usuario.senha !== senha) {
      return res.status(401).json({ mensagem: 'Credenciais inválidas' });
    }
    res.json({ mensagem: 'Login efetuado com sucesso!', token: 'token-jwt-simulado' });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao realizar login' });
  }
};