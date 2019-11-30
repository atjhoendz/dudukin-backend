const User = require('../models/user');

module.exports = {
  getAllUser: (req, res) => {
    User.find({}).then((users) => {
      res.status(200).json({
        message: 'Get All User',
        users
      })
    }).catch((err) => {
      res.status(500).json({
        message: err.message
      });
    });
  }
}
