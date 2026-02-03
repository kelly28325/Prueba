
const router = require('express').Router();
const controller = require('../controllers/usuario.controller');
router.get('/', controller.listar);
module.exports = router;
