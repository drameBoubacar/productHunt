const express = require('express');

const router = express.Router();

const Products = require('../models/products');

router.get('/home', (request, response) => {
  response.render('products/home');
});

router.get('/products', (request, response) => {
  Products.find({}, (error, products) => {
    if (error) {
      response.send(error);
    }
    response.render('products/products', { products });
  });
});


module.exports = router;
