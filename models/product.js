const db = require('../config/db');

// Create a new product
exports.createProduct = (name, isIntermediate, quantitySold, quantityProduced) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO products (name, is_intermediate, quantity_sold, quantity_produced) VALUES (?, ?, ?, ?)';
        db.query(query, [name, isIntermediate, quantitySold, quantityProduced], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

// Get a product by ID
exports.getProductById = (productId) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM products WHERE product_id = ?';
        db.query(query, [productId], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result[0]);
        });
    });
};

// Get all products
exports.getAllProducts = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM products';
        db.query(query, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

// Update a product
exports.updateProduct = (productId, updates) => {
    return new Promise((resolve, reject) => {
        const fields = [];
        const values = [];
        for (const [key, value] of Object.entries(updates)) {
            fields.push(`${key} = ?`);
            values.push(value);
        }
        const query = `UPDATE products SET ${fields.join(', ')} WHERE product_id = ?`;
        values.push(productId);
        db.query(query, values, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

// Delete a product
exports.deleteProduct = (productId) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM products WHERE product_id = ?';
        db.query(query, [productId], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};
