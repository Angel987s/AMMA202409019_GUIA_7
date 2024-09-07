const express = require('express');
const router = express.Router();
const productoAMMAController = require('./controllers/productoAMMAController');

router.get('/', productoAMMAController.getAllProductosAMMA);
router.get('/:id', productoAMMAController.getProductoAMMAById);
router.post('/', productoAMMAController.createProductoAMMA);
router.put('/:id', productoAMMAController.updateProductoAMMA);
router.delete('/:id', productoAMMAController.deleteProductoAMMA);

module.exports = router;