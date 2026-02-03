
const Usuario = require('../models/Usuario');

exports.listar = async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
};
