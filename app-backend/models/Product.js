const {DataTypes} = require('sequelize')
const db = require('../config/db')

const Product = db.define("Product",{
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Product; 
