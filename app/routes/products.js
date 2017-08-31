const express = require('express');

const router = express.Router();
const Product = require('../models/product');

router.get('/home', (request, response) => {
  response.render('products/home');
});

router.get('/products', (request, response) => {
  Product.find({}, (error, products) => {
    if (error) {
      response.send(error);
    }
    response.render('products/products', { products });
  });
});

router.get('/add', (request, response) => {
  response.render('products/add');
});

router.post('/add', (request, response) => {
  const product = new Product(request.body);
  product.save((error, newProducts) => {
    if (error) {
      response.send(error);
    }
    response.redirect('/products');
  });
});

module.exports = router;
