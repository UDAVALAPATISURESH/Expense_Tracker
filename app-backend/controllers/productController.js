const Product = require("../models/Product");

const addProduct = async (req, res) => {
  try {
    const { name, price, category } = req.body;

    const product = await Product.create({ name, price, category });
    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding product" });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching products" });
  }
};

module.exports = { addProduct, getProducts };
