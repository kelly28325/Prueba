
const Simulacion = require('../models/Simulacion');
const { optimizar } = require('../services/simulacion.service');

exports.simular = async (req, res) => {
  const { usuario_id, capital_disponible, productos } = req.body;
  const resultado = optimizar(capital_disponible, productos);

  if (resultado.productos.length === 0) {
    return res.status(400).json({ error: 'Fondos insuficientes' });
  }

  const sim = await Simulacion.create({
    usuario_id,
    fecha_simulacion: new Date(),
    capital_disponible,
    ganancia_total: resultado.ganancia,
    productos_seleccionados: resultado.productos
  });

  res.json({
    id: sim.id,
    capital_disponible,
    productos_seleccionados: resultado.productos,
    costo_total: resultado.costo,
    ganancia_total: resultado.ganancia
  });
};

exports.porUsuario = async (req, res) => {
  const sims = await Simulacion.findAll({ where: { usuario_id: req.params.usuarioId }});
  res.json(sims);
};
