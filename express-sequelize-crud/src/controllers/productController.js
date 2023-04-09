const Products = require('../models/Products');
const productController = {
    listProducts: async (req, res) => {
        const listOfProducts = await Products.findAll();
        res.json(listOfProducts);
    },

    async registerProduct(req, res) {
        const { name, price, quantity } = req.body;

        const newProduct = await Products.create({
            name,
            price,
            quantity
        });
        res.json(newProduct);
    },

    async deleteProduct(req, res) {
        const { id } = req.params;

        await Products.destroy({
            where: {
                id
            }
        });

        res.json('Product deleted!');
    },

    async updateProduct(req, res) {
        const { id } = req.params;
        const { name, price, quantity } = req.body;

        const updatedProduct = await Products.update({
            name,
            price,
            quantity
        },
            {
                where: {
                    id
                }
            });
            
        res.json('Product updated!')
    }
};

module.exports = productController;