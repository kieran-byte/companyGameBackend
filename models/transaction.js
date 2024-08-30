const db = require('../config/db');

// Create a transaction (buy or sell)
exports.createTransaction = (buyerDivisionId, sellerDivisionId, productId, quantity, totalPrice, transactionType, companyId) => {
    return new Promise((resolve, reject) => {
        const query = `
            INSERT INTO transactions (buyer_division_id, seller_division_id, product_id, quantity, total_price, transaction_type, company_id)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        db.query(query, [buyerDivisionId, sellerDivisionId, productId, quantity, totalPrice, transactionType, companyId], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

// Retrieve a transaction by its ID
exports.getTransactionById = (transactionId) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM transactions WHERE transaction_id = ?';
        db.query(query, [transactionId], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result[0]);
        });
    });
};

// Retrieve all transactions
exports.getAllTransactions = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM transactions';
        db.query(query, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

// Delete a transaction by its ID
exports.deleteTransaction = (transactionId) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM transactions WHERE transaction_id = ?';
        db.query(query, [transactionId], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

exports.updateTransaction = (transactionId, buyerDivisionId, sellerDivisionId, productId, quantity, totalPrice, transactionType, companyId) => {
    return new Promise((resolve, reject) => {
        const query = `
            UPDATE transactions
            SET buyer_division_id = ?, seller_division_id = ?, product_id = ?, quantity = ?, total_price = ?, transaction_type = ?, company_id = ?
            WHERE transaction_id = ?
        `;
        db.query(query, [buyerDivisionId, sellerDivisionId, productId, quantity, totalPrice, transactionType, companyId, transactionId], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};