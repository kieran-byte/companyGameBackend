const transactionModel = require('../models/transactionModel'); // Adjust the path based on your project structure

// Create a new transaction
exports.createTransaction = async (req, res) => {
    try {
        const { buyerDivisionId, sellerDivisionId, productId, quantity, totalPrice, transactionType, companyId } = req.body;

        const result = await transactionModel.createTransaction(
            buyerDivisionId,
            sellerDivisionId,
            productId,
            quantity,
            totalPrice,
            transactionType,
            companyId
        );

        res.status(201).json({
            message: 'Transaction created successfully',
            transactionId: result.insertId,
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create transaction', error: error.message });
    }
};


exports.getTransactionById = async (req, res) => {
    try {
        const transactionId = req.params.id;
        const transaction = await transactionModel.getTransactionById(transactionId);

        if (!transaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }

        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get transaction', error: error.message });
    }
};


exports.getAllTransactions = async (req, res) => {
    try {
        const transactions = await transactionModel.getAllTransactions();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get transactions', error: error.message });
    }
};


exports.updateTransaction = async (req, res) => {
    try {
        const transactionId = req.params.id;
        const { buyerDivisionId, sellerDivisionId, productId, quantity, totalPrice, transactionType, companyId } = req.body;

        // Validate the input data here if needed

        const result = await transactionModel.updateTransaction(
            transactionId,
            buyerDivisionId,
            sellerDivisionId,
            productId,
            quantity,
            totalPrice,
            transactionType,
            companyId
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Transaction not found' });
        }

        res.status(200).json({ message: 'Transaction updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update transaction', error: error.message });
    }
};

exports.deleteTransaction = async (req, res) => {
    try {
        const transactionId = req.params.id;
        const result = await transactionModel.deleteTransaction(transactionId);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Transaction not found' });
        }

        res.status(200).json({ message: 'Transaction deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete transaction', error: error.message });
    }
};
