
const router = require('express').Router();
const controller = require('../controllers/simulacion.controller');
router.post('/', controller.simular);
router.get('/:usuarioId', controller.porUsuario);
module.exports = router;
