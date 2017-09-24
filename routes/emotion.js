var plotly = require('plotly')("njvanhaute", "ea4yKWKZ9ELfBXpLDHXz");
var express = require('express');
var router = express.Router();
var fs = require('fs');

// var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
// var tone_analyzer = new ToneAnalyzerV3({
//   username: 'c5028d38-e106-4b76-b284-00db3c700cf8',
//   password: 'xBpEgD8AgOsO',
//   version_date: '2017-09-18'
// });

router.get('/emotion/:anger/:disgust/:fear/:joy/:sadness', function(req, res, next) {

  // var params = {
  //   // Get the text from the JSON file.
  //   text: require('../tweets').text,
  //   tones: 'emotion'
  // };

  // var responseValues = [];
  // var nameVariables = [];

  // tone_analyzer.tone(params, function(error, response) {
  //   if (error){
  //     console.log('error:', error);
  //   }
  //   else {
  //     // console.log(JSON.stringify(response, null, 2));
  //     process.env.anger = response['document_tone']['tone_categories'][0]['tones'][0]['score'];
  //     process.env.disgust = response['document_tone']['tone_categories'][0]['tones'][1]['score'];
  //     process.env.fear = response['document_tone']['tone_categories'][0]['tones'][2]['score'];
  //     process.env.joy = response['document_tone']['tone_categories'][0]['tones'][3]['score'];
  //     process.env.sadness = response['document_tone']['tone_categories'][0]['tones'][4]['score'];
  //     // for (var i = 0; i < 5; i++) {
  //     //   responseValues[i] = response['document_tone']['tone_categories'][0]['tones'][i]['score'];
  //     //   nameVariables[i] = response['document_tone']['tone_categories'][0]['tones'][i]['tone_name'];
  //     // }      
  //     // var data = [
  //     //   {
  //     //     x: nameVariables,
  //     //     y: responseValues,
  //     //     marker: {color: ["#FF3601", "#E88000", "#FFCB00", "#CDE800", "#1DFF0D"]},
  //     //     type: "bar"
  //     //   }
  //     // ];
  //     fs.truncate('tweets.json', 0, function(){
  //       console.log('file cleared')
  //       process.env.anger = 0;
  //       process.env.disgust = 0;
  //       process.env.fear = 0;
  //       process.env.joy = 0;
  //       process.env.sadness = 0;
        
  //     })
  //     console.log('===========================================================');
  //     console.log('Tone Values= ' + responseValues);
  //     console.log(process.env.anger);
  //     console.log(process.env.disgust);
  //     console.log(process.env.fear);
  //     console.log(process.env.joy);
  //     console.log(process.env.sadness);
  //     console.log('===========================================================');
  //     // res.render('emotion', { title2: 'Stats', anger: responseValues[0], disgust: responseValues[1], fear: responseValues[2], joy: responseValues[3], sadness: responseValues[4]});
      res.render('emotion', { title2: 'Stats', 
                              anger: req.params.anger,
                              disgust: req.params.disgust,
                              fear: req.params.fear,
                              joy: req.params.joy,
                              sadness: req.params.sadness});
      // var graphOptions = {filename: "basic-bar", fileopt: "overwrite"};
      // plotly.plot(data, graphOptions, function(err, msg) {
      //   // console.log(msg);
      //   fs.unlink('tweets.json',() => {console.log('File Deleted Callback');});
        
      // });      
    // }
  // });
});
  


module.exports = router;
// Watson API key: Gk8RNv8sb60vinrgJ9xbA87iE3tD5cd-ihN6CiavG2Pu
