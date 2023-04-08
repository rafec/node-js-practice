const db = require('../database');
const { DataTypes } = require('sequelize');

const Products = db.define('Products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING
    },
    preco: {
        type: DataType.FLOAT
    },
    quantidade: {
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