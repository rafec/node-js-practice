const db = require('../database');
const { DataTypes } = require('sequelize');
const Manufacturers = require('./Manufacturers');

const Products = db.define('Products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    manufacturer_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Manufacturers,
            key: 'id'
        }
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
},
    {
        tableName: 'products'
    }
);

module.exports = Products;