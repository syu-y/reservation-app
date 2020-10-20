const express = require('express');
const Product = require('../model/product');

const router = express.Router();

router.get('', (req, res) => {
  Product.find({}, (err, foundProducts) => {
    res.json(foundProducts);
  });
});

router.get('/:productId', (req, res) => {
  const productId = req.params.productId;
  Product.findById(productId, (err, foundProduct) => {
    res.json(foundProduct);
  });
});

module.exports = router;
