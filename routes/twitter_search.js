var express = require('express');
var router = express.Router();
var Twitter = require('twitter');

/* GET home page. */
router.get('/search', function(req, res, next) {
  res.render('index', { title: 'Seach a user' });
   
  var client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
  });
   
  var params = {screen_name: 'nodejs'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  });
});


