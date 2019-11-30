var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MerchantSchema = new Schema({
  nama: String,
  deskripsi: String,
  alamat: String,
  waktu_buka: String,
  waktu_tutup: String,
  status: String
});

var Merchant = mongoose.model('Merchant', MerchantSchema, 'Merchant');
module.exports = Merchant;
