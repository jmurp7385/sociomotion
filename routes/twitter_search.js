var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/search', function(req, res, next) {
  res.render('index', { title: 'Seach a user' });
  var twitterAPI = require('node-twitter-api');
  var twitter = new twitterAPI({
      consumerKey: 'GyeiEZokW8JWnP5Hdh7EOQtYO',
      consumerSecret: 'BFhddugDswIaDPBcSjvMuPRBGYtoZa4pckqVx7yi5ZUebpC341',
      // callback: 'http://yoururl.tld/something'
  });
  twitter.getRequestToken(function(error, requestToken, requestTokenSecret, results){
      if (error) {
          console.log("Error getting OAuth request token : " + error);
      } else {      
          //store token and tokenSecret somewhere, you'll need them later; redirect user       
          app.use(session({ request: requestToken, request_secret: requestTokenSecret, cookie: { maxAge: 60000 }}));
      }
  });
});


