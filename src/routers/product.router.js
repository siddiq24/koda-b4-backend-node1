const express = require('express');
const router = express.Router();

const productController = require('../controllers/products.controller');
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductsById);
router.post('/products', productController.createNewProduct);
router.patch('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
