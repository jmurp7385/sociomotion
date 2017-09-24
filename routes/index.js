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
    consumer_key: 'GyeiEZokW8JWnP5Hdh7EOQtYO',
    consumer_secret: 'BFhddugDswIaDPBcSjvMuPRBGYtoZa4pckqVx7yi5ZUebpC341',
    access_token_key: '606667045-Vqoqd3tDXknDgBLXSFApDBYVyZFJvhx5Sxh5pc2f',
    access_token_secret: 'hoxNk7cGvZRomAFmfsol3DW4LkmblRf6HGJzi7zu81R4C'
  });
  
  var params = {screen_name: req.params.screen_name};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
      res.render('tweets', { title: 'Tweets',tweets: tweets });
    } else {
      res.send(error)
    }
  });
});

module.exports = router;
