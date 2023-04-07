const productController = {
    listProducts: (req, res) => {
        res.json([{name: 'Product 1'}, {name: 'Product 2'}]);
    },

    registerProduct(req, res){
        console.log(req.body);
        res.json('Product registered!');
    }
};

module.exports = productController;