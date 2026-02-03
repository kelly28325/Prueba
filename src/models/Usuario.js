
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  nombre: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  capital_disponible: DataTypes.DECIMAL(10,2)
});

module.exports = Usuario;
