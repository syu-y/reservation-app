const express = require('express');
const Product = require('../model/product');

const router = express.Router();

router.get('', (req, res) => {
  Product.find({}, (err, foundProducts) => {
    res.json(foundProducts);
  });
});

module.exports = router;
