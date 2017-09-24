var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sociomotion' });
});

/* GET tweets. */
router.post('/search', function(req, res, next) {
  console.log("SCREEN_NAME = "+req.body.screen_name);
  var screen_name = '';
  if (req.body.screen_name != '') {
    screen_name = req.body.screen_name;
  } else {
    screen_name = 'GreatestQuotes';
  }
  res.redirect('/search/' + screen_name);
});

router.get('/search/:screen_name', function(req, res, next) {
  // res.send(req.params.screen_name)

  var client = new Twitter({
    consumer_key: 'GyeiEZokW8JWnP5Hdh7EOQtYO',
    consumer_secret: 'BFhddugDswIaDPBcSjvMuPRBGYtoZa4pckqVx7yi5ZUebpC341',
    access_token_key: '606667045-Vqoqd3tDXknDgBLXSFApDBYVyZFJvhx5Sxh5pc2f',
    access_token_secret: 'hoxNk7cGvZRomAFmfsol3DW4LkmblRf6HGJzi7zu81R4C'
    // consumer_key: process.env.consumer_key,
    // consumer_secret: process.env.consumer_secret,
    // access_token_key: process.env.access_token_key,
    // access_token_secret: process.env.access_token_secret
  });

  var sentences = "";
  var params = {screen_name: req.params.screen_name};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {      
      // fs.unlinkSync('tweets.json');
      console.log('File deleted');
      var writeStream = fs.createWriteStream('tweets.json');
      for(x=0;x < tweets.length; x++){        
        sentences += " " + tweets[x]['text'];
      }      
      var json = {'text': sentences};
      var json_string = JSON.stringify(json);
      writeStream.write(json_string);  
      writeStream.on('finish', () => {  
          console.log('wrote all data to file');          
      });
      writeStream.end();

      res.render('tweets', { title: 'Tweets',tweets: tweets });
    } else {
      res.send(error)
    }
  });
});

module.exports = router;
