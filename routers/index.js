var express = require('express');
//let photoController = require('./../controller/PhotoController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('WELCOME TO EJARA CODE TEST');
});


module.exports = router;
