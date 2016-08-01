var express = require('express');
router = express.Router();

router.get('/', function(req, res) {
  res.send('get all stormtroppers');
});

router.get('/:id', function(req, res) {
  res.send('get one stormtroppers');
});

router.post('/', function(req, res) {
  res.send('create a new stormtroppers');
});

router.put('/', function(req, res) {
  res.send('update a stormtroppers');
});

router.delete('/', function(req, res) {
  res.send('delete a stormtroppers');
});

module.exports = router;
