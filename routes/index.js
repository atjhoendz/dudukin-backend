var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Post = require("../models/post");
const usersRouter = require('./users');
const { login, register } = require('../controllers/AuthController');
const auth = require('../middleware/auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dudukin - Backend' });
});

router.post('/login', login);
router.post('/register', register);
router.use('/users', auth.isAuth, usersRouter);

// Post

router.post('/posts', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var new_post = new User({
    title: title,
    description: description
  });

  new_post.save(function(error){
    if(error){
      console.log(error);
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    });
  });
});

// Get

router.get('/posts', (req,res)=>{
  Post.find({}, 'title description', function(error, posts){
    if(error){
      console.log(error);
    }
    res.send({
      posts: posts
    });
  }).sort({_id:-1});
});


module.exports = router;
