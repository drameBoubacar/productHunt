const express = require('express');
const router = express.Router();
const products = require('./products.js');



router.use(products);

module.exports = router;
