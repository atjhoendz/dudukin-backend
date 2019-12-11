const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const round = 12;

module.exports = {
  register: (req, res) => {
    User.find({
      email: req.body.email
    }).then((hasil) => {
      if(hasil){
        bcrypt.hash(req.body.password, round).then((hash) => {
          User.create({
            email: req.body.email,
            password: hash,
            role: 'user'
          }).then((user) => {
            res.status(201).json({
              success: true,
              message: 'Register berhasil',
              user
            });
          }).catch((err) => {
            res.status(500).json({
              success: false,
              message: err.message
            });
          });
        })
      } else {
        res.status(200).json({
          success: false,
          message: 'Register gagal, data sudah tersedia'
        });
      }
    });
  },
  login: (req, res) => {
    var email = req.body.email;
    var pwd = req.body.password;
    User.findOne({
      email: req.body.email
    }).orFail().then((user) => {
      const checkLogin = bcrypt.compareSync(req.body.password, user.password);
      if(checkLogin){
        var token = jwt.sign({ id: user._id, role: user.role }, process.env.SECRET_KEY);
        if(token){
          res.status(200).json({
            success: true,
            message: "Login Berhasil",
            token: token,
            user
          });
        }
      }else{
        res.status(200).json({
          success: false,
          message: "Login tidak berhasil, username atau password salah"
        });
      }
    }).catch((err) => {
      res.status(200).json({
        success: false,
        message: "Username atau password belum terdaftar"
      });
    });
  }
}
