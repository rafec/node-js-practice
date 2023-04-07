const express = require('express');
const productController = require('../controllers/productController');

const routes = express.Router();

routes.get('/', (req, res) => {
    console.log(req.query);
    res.send('Hello World!');
});

routes.get('/product/list', productController.listProducts);
routes.post('/product', productController.registerProduct)

routes.get('/product/:id/:category', (req, res) => {
    console.log(req.params);
    res.send('Hello World!');
});

routes.post('/register', (req, res) => {
    console.log(req.body);
    res.send('Product registered!');
});

module.exports = routes;