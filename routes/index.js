var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Atjhoendz' });
});

router.get('/posts', (req,res)=>{
  res.send(
    [{
      title: 'msg',
      isi:'Ini Pesan Saya'
    }]
  )
});


module.exports = router;
