
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('andesfin', 'postgres', 'postgres', {
  host: 'db',
  dialect: 'postgres'
});

module.exports = { sequelize };
