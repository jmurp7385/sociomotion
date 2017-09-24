var plotly = require('plotly')("njvanhaute", "ea4yKWKZ9ELfBXpLDHXz");
var express = require('express');
var router = express.Router();

var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var tone_analyzer = new ToneAnalyzerV3({
  username: '{username}',
  password: '{password}',
  version_date: '{version}'
});
//reponse = JSON object returned by IBM api
var response = x;
var responseValues = [];
for (var i = 0; i < 5; i++)
{
  responseValues[i] = response[0][0][0][i][score];
}
var nameVariables = ["Anger", "Disgust", "Fear", "Joy", "Sadness"];

var data = [
  {
    x: nameVariables,
    y: responseValues,
    type: "bar"
  }
];

var graphOptions = {filename: "basic-bar", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function(err, msg) {
  console.log(msg);
});

router.get('/', function(req, res, next) {
    res.render('emotion', { title2: 'Stats', anger: angerFloat, digust: digustFloat, fear: fearFloat, joy: joyFloat, sadness: sadnessFloat });
});

module.exports = router;
// Comment, Hey