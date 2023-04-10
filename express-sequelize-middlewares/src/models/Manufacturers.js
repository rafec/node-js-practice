const db = require("../database");
const { DataTypes } = require("sequelize");

const Manufacturers = db.define(
  "Manufacturers",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "manufacturers",
  }
);

module.exports = Manufacturers;
