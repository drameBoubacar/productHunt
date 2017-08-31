const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  describe: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: Date }
});

module.exports = mongoose.model('Products', productSchema)
