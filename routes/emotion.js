var plotly = require('plotly')("njvanhaute", "ea4yKWKZ9ELfBXpLDHXz");
var express = require('express');
var router = express.Router();

var angerFloat = 0.68;
var digustFloat = 0.42;
var fearFloat = 0.32;
var joyFloat = .80;
var sadnessFloat = .2;

var data = [
  {
    x: ["giraffes", "orangutans", "monkeys"],
    y: [20, 14, 23],
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