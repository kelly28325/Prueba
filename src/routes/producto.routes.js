
const router = require('express').Router();
const controller = require('../controllers/producto.controller');
router.get('/', controller.listar);
module.exports = router;
