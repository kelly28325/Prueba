
const express = require('express');
const { sequelize } = require('./config/database');

const usuarioRoutes = require('./routes/usuario.routes');
const productoRoutes = require('./routes/producto.routes');
const simulacionRoutes = require('./routes/simulacion.routes');

const app = express();
app.use(express.json());

app.use('/usuarios', usuarioRoutes);
app.use('/productos', productoRoutes);
app.use('/simulaciones', simulacionRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Servidor iniciado en puerto 3000'));
});
