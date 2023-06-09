const db = require('../database');
const { DataTypes } = require('sequelize');

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
        type: DataType.FLOAT
    },
    quantity: {
        type: DataType.INTEGER
    },
    createdAt: {
        type: DataType.DATE
    },
    updatedAt: {
        type: DataType.DATE
    }
},
    {
        tableName: 'products'
    }
);

module.exports = Products;