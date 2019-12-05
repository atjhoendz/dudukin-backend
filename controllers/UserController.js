const User = require('../models/user');
const bcrypt = require('bcrypt');
const round = 12;

module.exports = {
  getAll: (req, res) => {
    User.find({}).then((result) => {
      res.status(200).json({
        status: 'success',
        message: 'Get All User',
        result
      })
    }).catch((err) => {
      res.status(500).json({
        status: 'failed',
        message: err.message
      });
    });
  },

  get: (req, res) => {
    let key = req.params.key;
    let value = req.params.value;
    let query = {};
    query[key] = new RegExp(value, 'i');
    User.find(query).orFail().then((result) => {
      res.status(200).json({
        status: 'success',
        result
      })
    }).catch((err) => {
      res.status(404).json({
        status: 'failed',
        message: err.message
      })
    });
  },

  deleteUser: (req, res) => {
    let id = req.params.id;
    User.deleteOne({ _id: id}).orFail().then((result) => {
        res.status(200).json({
          status: 'success',
          message: 'Berhasil Dihapus'
      });
    }).catch((err) => {
      res.status(404).json({
        status: 'failed',
        message: err.message
      })
    })
  },

  update: (req, res) => {
    let id = req.params.id;
    User.findByIdAndUpdate(id, {
      nama_lengkap: req.body.nama_lengkap,
      jk: req.body.jk,
      alamat: req.body.alamat,
      no_telp: req.body.no_telp,
    }).orFail().then((result)=>{
      res.status(200).json({
        status: 'success',
        message: 'Data berhasil diperbarui'
      })
    }).catch((err) => {
      res.status(404).json({
        status: 'failed',
        message: err.message
      })
    })
  },

  updateRole: (req, res) => {
    let id = req.params.id;
    User.findByIdAndUpdate(id, {
      role: req.body.role
    }).orFail().then((result) => {
      res.status(200).json({
        status: 'success',
        message: 'Role berhasil diperbarui'
      });
    }).catch((err) => {
      res.status(404).json({
        status: 'failed',
        message: err.message
      })
    })
  },

  updatePassword: (req, res) => {
    let id = req.params.id;
    let oldPwd = req.body.oldPwd;
    let confirm_oldPwd = req.body.confirm_oldPwd;
    let newPwd = req.body.newPwd;
    if(oldPwd != confirm_oldPwd){
      res.status(200).json({
        status: 'failed',
        message: 'Konfirmasi password tidak sama'
      });
    }else{
      User.findById(id).orFail().then((result) => {
        let compare = bcrypt.compareSync(oldPwd, result.password);
        if(compare){
          bcrypt.hash(newPwd, round).then((hash) => {
            User.findByIdAndUpdate(id, {
              password: hash
            }).orFail().then((result) => {
              res.status(200).json({
                status: 'success',
                message: 'Password berhasil diperbarui'
              });
            }).catch((err) => {
              res.status(404).json({
                status: 'failed',
                message: err.message
              })
            })
          });
        }else{
          res.status(404).json({
            status: 'failed',
            message: 'Password lama tidak cocok dengan database'
          });
        }
      }).catch((err) => {
        res.status(404).json({
          status: 'failed',
          message: 'User tidak ditemukan'
        });
      });
    }
  }

}
