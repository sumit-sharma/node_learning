var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', userController.user_list);

router.get('/cool', function (req, res, next) {
  res.send('You are so cool');
});


router.post('/store', userController.user_store);
router.put('/:userId/update', userController.user_update);
router.delete('/:userId', userController.user_delete);


module.exports = router;
