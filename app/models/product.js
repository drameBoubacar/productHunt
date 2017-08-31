const mongoose = require('mongoose');

const product = mongoose.Schema({
  name: { type: String },
  describe: { type: String },
  url: { type: String },
  date: { type: Date }
});

module.exports = mongoose.model('Product', product)
