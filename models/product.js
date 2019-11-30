var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  id_merchant: ObjectId,
  nama: String,
  harga: String
})

var Product = mongoose.model('Product', ProductSchema, 'Product');
module.exports = Product;
