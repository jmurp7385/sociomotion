var angerFloat = 0.68;
var digustFloat = 0.42;
var fearFloat = 0.32;
var joyFloat = .80;
var sadnessFloat = .2;

router.get('/', function(req, res, next) {
    res.render('emotion', { anger: angerFloat, digust: digustFloat, fear: fearFloat, joy: joyFloat, sadness: sadnessFloat });
  });

