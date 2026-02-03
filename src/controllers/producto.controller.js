
const Producto = require('../models/Producto');

exports.listar = async (req, res) => {
  const productos = await Producto.findAll({ where: { activo: true }});
  res.json(productos);
};
