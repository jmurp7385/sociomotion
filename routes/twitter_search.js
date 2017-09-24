var express = require('express');
var router = express.Router();
var Twitter = require('twitter');

/* GET tweets. */
router.get('/:screen_name', function(req, res, next) {
  res.send(req.params.screen_name)
  console.log(req)
  var client = new Twitter({
    consumer_key: 'GyeiEZokW8JWnP5Hdh7EOQtYO',
    consumer_secret: 'BFhddugDswIaDPBcSjvMuPRBGYtoZa4pckqVx7yi5ZUebpC341',
    access_token_key: '606667045-Vqoqd3tDXknDgBLXSFApDBYVyZFJvhx5Sxh5pc2f',
    access_token_secret: 'hoxNk7cGvZRomAFmfsol3DW4LkmblRf6HGJzi7zu81R4C'
  });
  
  var params = {screen_name: 'joeymurphy7385', count: '200'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
      res.render('tweets', { title: 'Tweets', tweets: tweets });
    }
  });
});

module.exports = router;
