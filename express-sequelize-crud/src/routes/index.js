const express = require('express');
const productController = require('../controllers/productController');
const routes = express.Router();

routes.get('/product/list', productController.listProducts);
routes.post('/product/register', productController.registerProduct)
routes.delete('/product/:id/delete', productController.deleteProduct);
routes.put('/product/:id/update', productController.updateProduct);

module.exports = routes;