var express = require('express');
var router = express.Router();
const controller = require('../controllers/gameController');
    
/* GET games listing. */
router.get('/', controller.getAll);
    
module.exports = router;