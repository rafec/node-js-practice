const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Hello World!');
});

routes.post('/register', (req, res) => {
    console.log(req.body);
    res.send('Product registered!')
});

module.exports = routes;