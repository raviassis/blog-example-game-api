var express = require('express');
var router = express.Router();
const controller = require('../controllers/gameController');
    
/* GET games listing. */
router.get('/', controller.getAll);
/* POST game */
router.post('/', controller.create);
    
module.exports = router;