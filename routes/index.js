var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sociomotion' });
});

//Callback functions
  var error = function (err, response, body) {
      console.log('ERROR [%s]', err);
  };
  var success = function (data) {
      console.log('Data [%s]', data);
  };

  var Twitter = require('twitter-node-client').Twitter;


  //Get this data from your twitter apps dashboard
  // {
  //     "consumerKey": "GyeiEZokW8JWnP5Hdh7EOQtYO",
  //     "consumerSecret": "BFhddugDswIaDPBcSjvMuPRBGYtoZa4pckqVx7yi5ZUebpC341",
  //     "accessToken": "606667045-Vqoqd3tDXknDgBLXSFApDBYVyZFJvhx5Sxh5pc2f",
  //     "accessTokenSecret": "hoxNk7cGvZRomAFmfsol3DW4LkmblRf6HGJzi7zu81R4C",
  //     "callBackUrl": "XXX"
  // }

  var twitter = new Twitter();

  twitter.getCustomApiCall('/statuses/user_timeline.json',{ screen_name: '412312323'}, error, success);

module.exports = router;
