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

module.exports = router;

