const express = require('express');
const router = express.Router();
const divisionController = require('../controllers/divisionController');
const locationController = require('../controllers/locationController');
const productController = require('../controllers/productController');
const companyController = require('../controllers/companyController');
const transactionController = require('../controllers/transactionController');

// Divisions
router.post('/createDivision', divisionController.createDivision);
router.get('/divisions/:divisionId', divisionController.getDivisionById);
router.get('/divisions', divisionController.getAllDivisions);
router.put('/divisions/:divisionId', divisionController.updateDivision);
router.put('/divisions/:divisionId/transfer', divisionController.transferOwnership);
router.delete('/divisions/:divisionId', divisionController.deleteDivision);

// Locations
router.post('/locations', locationController.createLocation);
router.get('/locations/:locationId', locationController.getLocationById);
router.get('/locations', locationController.getAllLocations);
router.put('/locations/:locationId', locationController.updateLocation);
router.delete('/locations/:locationId', locationController.deleteLocation);

// Products
router.post('/products', productController.createProduct);
router.get('/products/:productId', productController.getProductById);
router.get('/products', productController.getAllProducts);
router.put('/products/:productId', productController.updateProduct);
router.delete('/products/:productId', productController.deleteProduct);


//Companies
router.post('/companies', companyController.createCompany);
router.get('/companies/:companyId', companyController.getCompanyById);
router.get('/companies', companyController.getAllCompanies);
router.put('/companies/:companyId', companyController.updateCompany);
router.delete('/companies/:companyId', companyController.deleteCompany);




router.post('/transactions', transactionController.createTransaction);
router.get('/transactions/:id', transactionController.getTransactionById);
router.get('/transactions', transactionController.getAllTransactions);
router.put('/transactions/:id', transactionController.updateTransaction);
router.delete('/transactions/:id', transactionController.deleteTransaction);


// TODO: routes for locations, companies, products, divisionProducts, transactions, gameState, and marketTrends

module.exports = router;
