const express = require('express');
const router = express.Router();
const divisionController = require('../controllers/divisionController');




//Divisions
router.get('/divisions', divisionController.getAllDivisions);
router.get('/divisions/:divisionId', divisionController.getDivisionById);
router.post('/create-division', divisionController.createDivision);
router.put('/update-division/:divisionId', divisionController.updateDivision);
router.put('/transfer-ownership/:divisionId', divisionController.transferOwnership);


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



// Divisions
router.post('/divisions', divisionController.createDivision);
router.get('/divisions/:divisionId', divisionController.getDivisionById);
router.get('/divisions', divisionController.getAllDivisions);
router.put('/divisions/:divisionId', divisionController.updateDivision);
router.put('/divisions/:divisionId/transfer', divisionController.transferOwnership);
router.delete('/divisions/:divisionId', divisionController.deleteDivision);




// ToDo: routes for locations, companies, products, divisionProducts, transactions, gameState, and marketTrends

module.exports = router;
