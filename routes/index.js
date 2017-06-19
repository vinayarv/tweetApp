const express = require('express');
const router = express.Router();
const path = require('path');

const tweetBank = require('../tweetBank');

router.get('/', function(req, res, next){
  let tweets = tweetBank.list();
  res.render('index', {tweets: tweets});
  next();
});

//Look up how to get absolute path
// router.get('/stylesheets/style.css', function(req, res){
//   res.sendFile('/Users/vinayams/Documents/Grace-Hopper/workshops/tweetApp/public/stylesheets/style.css');
// })

//single user page
router.get('/users/:name', function(req, res, next){
  var name = req.params.name;
  var tweets = tweetBank.find({name: name});
  res.render('index', {title: 'Tweet App', tweets: tweets, name: name});
});


module.exports = router;

