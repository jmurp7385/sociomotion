var plotly = require('plotly')("njvanhaute", "ea4yKWKZ9ELfBXpLDHXz");
var express = require('express');
var router = express.Router();

var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var tone_analyzer = new ToneAnalyzerV3({
  username: 'c5028d38-e106-4b76-b284-00db3c700cf8',
  password: 'xBpEgD8AgOsO',
  version_date: '2017-09-18'
});
// Send request with Joey text
//reponse = JSON object returned by IBM api
var response = x;
var responseValues = [];
var nameVariables = [];
for (var i = 0; i < 5; i++)
{
  responseValues[i] = response['document_tone']['tone_categories']['tones'][i];
  nameVariables[i] = responseValues[i]['tone_name'];
  
}

var data = [
  {
    x: nameVariables,
    y: responseValues,
    marker: {color: ["#FF3601", "#E88000", "#FFCB00", "#CDE800", "#1DFF0D"]},
    type: "bar"
  }
];
//
var graphOptions = {filename: "basic-bar", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function(err, msg) {
  console.log(msg);
});

router.get('/', function(req, res, next) {
    res.render('emotion', { title2: 'Stats', anger: responseValues[0], digust: responseValues[1], fear: responseValues[2], joy: responseValues[3], sadness: responseValues[4]});
});

module.exports = router;
// Watson API key: Gk8RNv8sb60vinrgJ9xbA87iE3tD5cd-ihN6CiavG2Pu