
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Producto = sequelize.define('Producto', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  nombre: DataTypes.STRING,
  descripcion: DataTypes.TEXT,
  costo: DataTypes.DECIMAL(10,2),
  porcentaje_retorno: DataTypes.DECIMAL(5,2),
  activo: DataTypes.BOOLEAN
});

module.exports = Producto;
