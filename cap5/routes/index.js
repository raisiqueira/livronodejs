var express = require('express');
router = express.Router();

router.get('/', function(req, res) {
  res.status(201);
  res.json( {'name': 'Rai Siqueira', 'email': 'contato@raisiqueira.com'} );
});

//rota dos Stormtroppers
router.use('/stormtroppers', require('./stormtropper'));

module.exports = router;
