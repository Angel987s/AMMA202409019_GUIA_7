const ProductoAMMA = require('./models/productoAMMA');

// Obtener todos los productosAMMA
exports.getAllProductosAMMA = async(req, res) => {
    try {
        const productosAMMA = await ProductoAMMA.find();
        res.json(productosAMMA);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productosAMMA' });
    }
};

// Obtener un productoAMMA por su ID
exports.getProductoAMMAById = async(req, res) => {
    try {
        const productoAMMA = await ProductoAMMA.findById(req.params.id);
        if (!productoAMMA) {
            return res.status(404).json({ error: 'ProductoAMMA no encontrado' });
        }
        res.json(productoAMMA);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el productoAMMA' });
    }
};

// Crear un nuevo productoAMMA
exports.createProductoAMMA = async(req, res) => {
    try {
        const newProductoAMMA = new ProductoAMMA(req.body);
        const savedProductoAMMA = await newProductoAMMA.save();
        res.status(201).json(savedProductoAMMA);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el productoAMMA' });
    }
};

// Actualizar un productoAMMA
exports.updateProductoAMMA = async(req, res) => {
    try {
        const updatedProductoAMMA = await ProductoAMMA.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProductoAMMA) {
            return res.status(404).json({ error: 'ProductoAMMA no encontrado' });
        }
        res.json(updatedProductoAMMA);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el productoAMMA' });
    }
};

// Eliminar un productoAMMA existente
exports.deleteProductoAMMA = async(req, res) => {
    try {
        const deletedProductoAMMA = await ProductoAMMA.findByIdAndRemove(req.params.id);
        if (!deletedProductoAMMA) {
            return res.status(404).json({ error: 'ProductoAMMA no encontrado' });
        }
        res.json({ message: 'ProductoAMMA eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el productoAMMA' });
    }
};