const Merchant = require('../models/merchant');

module.exports = {
  getAll: (req, res) => {
    Merchant.find().then((result) => {
      res.status(200).json({
        status: 'success',
        message: 'Get All Merchant',
        result
      });
    }).catch((err) => {
      res.status(500).json({
        status: 'failed',
        merchant: err.message
      });
    })
  },

  get: (req, res) => {
    let key = req.params.key;
    let value = req.params.value;
    let query = {};
    query[key] = new RegExp(value, 'i');
    Merchant.find(query).orFail().then((result) => {
      res.status(200).json({
        status: 'success',
        result
      });
    }).catch((err) => {
      res.status(404).json({
        status: 'failed',
        message: err.message
      });
    });
  },

  add: (req, res) => {
    Merchant.create({
      nama: req.body.nama,
      deskripsi: req.body.deskripsi,
      alamat: req.body.alamat,
      waktu_buka: req.body.waktu_buka,
      waktu_tutup: req.body.waktu_tutup
    }).then((result) => {
      res.status(201).json({
        status: 'success',
        message: 'Merchant berhasil ditambahkan'
      });
    }).catch((err) => {
      res.status(500).json({
        status: 'failed',
        message: err.message
      });
    });
  },

  update: (req, res) => {
    Merchant.findByIdAndUpdate(req.params.id, {
      nama: req.body.nama,
      deskripsi: req.body.deskripsi,
      alamat: req.body.alamat,
      waktu_buka: req.body.waktu_buka,
      waktu_tutup: req.body.waktu_tutup
    }).orFail().then((result) => {
      res.status(200).json({
        status: 'success',
        message: 'Data berhasil diperbarui'
      });
    }).catch((err) => {
      res.status(404).json({
        status: 'failed',
        message: err.message
      });
    });
  },

  deleteMerchant: (req, res) => {
    Merchant.findByIdAndRemove(req.params.id).orFail().then((result) => {
      res.status(200).json({
        status: 'success',
        message: 'Berhasil dihapus'
      });
    }).catch((err) => {
      res.status(404).json({
        status: 'failed',
        message: err.message
      });
    });
  }
}
