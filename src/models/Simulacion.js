
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Simulacion = sequelize.define('Simulacion', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  usuario_id: DataTypes.UUID,
  fecha_simulacion: DataTypes.DATE,
  capital_disponible: DataTypes.DECIMAL(10,2),
  ganancia_total: DataTypes.DECIMAL(10,2),
  productos_seleccionados: DataTypes.JSON
});

module.exports = Simulacion;
