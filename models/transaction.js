var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
  id_user: ObjectId,
  id_merchant: ObjectId,
  id_meja: ObjectId,
  id_product: ObjectId,
  waktu_book: Number,
  lama_book: Number,
  jumlah: Number,
  total: Number
});

var Transaction = mongoose.model('Transaction', TransactionSchema, 'Transaction');
module.exports = Transaction;
