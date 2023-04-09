const sequelize = require('sequelize');
const DB_NAME = 'store';
const DB_USER = 'root';
const DB_PASS = 'root';
const DB_CONFIG = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
};

let db = {};

try {
    db = new sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    console.error('Error while trying to connect to database!');
};

async function hasConnection(){
    try {
        await db.authenticate();
        console.log('Connected to database!')
    } catch (error) {
        console.error('Error while trying to connect to database!');
    };
};

Object.assign(db, {
    hasConnection
});

module.exports = db;
