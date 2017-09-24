var express = require('express');
var router = express.Router();
var Twitter = require('twitter');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sociomotion' });
});

/* GET tweets. */
router.post('/search', function(req, res, next) {
  console.log(req.body);
  var screen_name = req.body.screen_name;
  res.redirect('/search/' + screen_name);
});

router.get('/search/:screen_name', function(req, res, next) {
  // res.send(req.params.screen_name)
  
  var client = new Twitter({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token_key,
    access_token_secret: process.env.access_token_secret
  });
  
  var params = {screen_name: req.params.screen_name};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      for(x=0;x < tweets.length; x++){
        console.log(tweets[x]['text']);

      }

      res.render('tweets', { title: 'Tweets',tweets: tweets });
    } else {
      res.send(error)
    }
  });
});

module.exports = router;
