var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImagesSchema = new Schema({
  id_product: ObjectId,
  link_foto: String
});

var Images = mongoose.model('Images', ImagesSchema, 'Images');
module.exports = Images;
