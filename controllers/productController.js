const productModel = require('../models/product');

// Create a new product
exports.createProduct = async (req, res) => {
    try {
        const { name, isIntermediate, quantitySold, quantityProduced } = req.body;
        const result = await productModel.createProduct(name, isIntermediate, quantitySold, quantityProduced);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a product by ID
exports.getProductById = async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await productModel.getProductById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await productModel.getAllProducts();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a product
exports.updateProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const data = req.body;
        const result = await productModel.updateProduct(productId, data);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const result = await productModel.deleteProduct(productId);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
