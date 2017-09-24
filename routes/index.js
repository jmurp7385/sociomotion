var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var fs = require('fs');
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sociomotion' });
});

/* POST screen_name */
router.post('/search', function(req, res, next) {
  console.log("SCREEN_NAME = "+req.body.screen_name);
  var screen_name = '';
  if (req.body.screen_name != '') {
    screen_name = req.body.screen_name;
    process.env.screen_name = screen_name;
  } else {
    screen_name = 'GreatestQuotes';
  }
  res.redirect('/search/' + screen_name);
});

router.get('/search/:screen_name', function(req, res, next) {
  var tone_analyzer = new ToneAnalyzerV3({
    username: 'c5028d38-e106-4b76-b284-00db3c700cf8',
    password: 'xBpEgD8AgOsO',
    version_date: '2017-09-18'
  });
  var client = new Twitter({
    consumer_key: 'GyeiEZokW8JWnP5Hdh7EOQtYO',
    consumer_secret: 'BFhddugDswIaDPBcSjvMuPRBGYtoZa4pckqVx7yi5ZUebpC341',
    access_token_key: '606667045-Vqoqd3tDXknDgBLXSFApDBYVyZFJvhx5Sxh5pc2f',
    access_token_secret: 'hoxNk7cGvZRomAFmfsol3DW4LkmblRf6HGJzi7zu81R4C'
  });
  
  var sentences = "";
  var params = {screen_name: req.params.screen_name};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {            
      var writeStream = fs.createWriteStream('tweets.json');
      for(x=0;x < tweets.length; x++){        
        sentences += " " + tweets[x]['text'];
      }      
      var json = {'text': sentences};
      var params = {        
        text: JSON.stringify(json)
      };

      var anger = '';
      var disgust = '';
      var fear = '';
      var joy = '';
      var sadness = '';

      var analytical = '';
      var confident = '';
      var tentative = '';

      var openness_big5 = '';
      var conscientiousness_big5 = '';
      var extravision_big5 = '';
      var agreeableness_big5 = '';
      var emotion_range_big5 = '';

      tone_analyzer.tone(params, function(error, response) {
        if (error){
          console.log('error:', error);
        }
        else {
          anger = response['document_tone']['tone_categories'][0]['tones'][0]['score'];
          disgust = response['document_tone']['tone_categories'][0]['tones'][1]['score'];
          fear = response['document_tone']['tone_categories'][0]['tones'][2]['score'];
          joy = response['document_tone']['tone_categories'][0]['tones'][3]['score'];
          sadness = response['document_tone']['tone_categories'][0]['tones'][4]['score'];

          analytical = response['document_tone']['tone_categories'][1]['tones'][0]['score'];
          confident = response['document_tone']['tone_categories'][1]['tones'][1]['score'];
          tentative = response['document_tone']['tone_categories'][1]['tones'][2]['score'];

          openness_big5 = response['document_tone']['tone_categories'][2]['tones'][0]['score'];
          conscientiousness_big5 = response['document_tone']['tone_categories'][1]['tones'][1]['score'];
          extravision_big5 = response['document_tone']['tone_categories'][2]['tones'][2]['score'];
          agreeableness_big5 = response['document_tone']['tone_categories'][2]['tones'][3]['score'];
          emotion_range_big5 = response['document_tone']['tone_categories'][2]['tones'][4]['score'];
        }
        res.redirect('/emotion/'+anger+'/'+disgust+'/'+fear+'/'+joy+'/'+sadness);
      });
      
      // res.render('tweets', { title: 'Tweets',tweets: tweets });
    } else {
      res.send(error)
    }
  });
});

router.get('/emotion/:anger/:disgust/:fear/:joy/:sadness', function(req, res, next) {
      res.render('emotion', { title2: 'Emotions for @'+ process.env.screen_name, 
                              anger: req.params.anger,
                              disgust: req.params.disgust,
                              fear: req.params.fear,
                              joy: req.params.joy,
                              sadness: req.params.sadness});
});


module.exports = router;
