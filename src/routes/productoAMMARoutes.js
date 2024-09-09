const express = require('express');
const router = express.Router();
const productoAMMAController = require('../controllers/productoAMMAController'); // Asegúrate de que la ruta sea correcta

// Definir las rutas
router.get('/', productoAMMAController.getAllProducts); // Asegúrate de que getAllProducts esté definido en el controlador
router.get('/:id', productoAMMAController.getProductById); // Asegúrate de que getProductById esté definido en el controlador
router.post('/', productoAMMAController.createProduct); // Asegúrate de que createProduct esté definido en el controlador
router.put('/:id', productoAMMAController.updateProduct); // Asegúrate de que updateProduct esté definido en el controlador
router.delete('/:id', productoAMMAController.deleteProduct); // Asegúrate de que deleteProduct esté definido en el controlador

module.exports = router;