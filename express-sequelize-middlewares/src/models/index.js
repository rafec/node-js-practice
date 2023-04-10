const Manufacturers = require('./Manufacturers');
const Products = require('./Products');

Products.belongsTo(Manufacturers, {
    foreignKey: 'manufacturer_id'
});

Manufacturers.hasMany(Products, {
    foreignKey: 'manufacturer_id'
});

module.exports = {
    Manufacturers,
    Products
}