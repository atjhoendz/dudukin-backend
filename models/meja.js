var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MejaSchema = new Schema({
  id_merchant: ObjectId,
  jml_kursi: Number
});

var Meja = mongoose.model('Meja', MejaSchema, 'Meja');
module.exports = Meja;
