var express = require('express');
let fileController = require('./../controllers/fileControler');
var router = express.Router();
router.get('/getMaleGenderFile',fileController.getMaleGenderFile);
router.get('/getFemaleGenderFile',fileController.getFemaleGenderFile);
module.exports = router;