const express = require('express');
const router = require('./routes/index');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/products', { useMongoClient: true }, () => {
  console.log('Connexion a la base de donnée établie');
});

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
