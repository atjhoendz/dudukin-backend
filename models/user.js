var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  nama_lengkap: String,
  email: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  jk: String,
  alamat: String,
  no_telp: String,
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
});

var User = mongoose.model("User", UserSchema, 'User');
module.exports = User;
