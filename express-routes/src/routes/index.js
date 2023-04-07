const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    console.log(req.query);
    res.send('Hello World!');
});

routes.get('/product/:id/:category', (req, res) => {
    console.log(req.params);
    res.send('Hello World!');
});

routes.post('/register', (req, res) => {
    console.log(req.body);
    res.send('Product registered!');
});

module.exports = routes;