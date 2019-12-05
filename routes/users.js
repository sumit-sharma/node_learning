var express = require('express');
var router = express.Router();
var ExpressJoi = require('express-joi-validator');
var Joi = require('joi');
var userController = require('../controllers/userController');
var getUser = require('../middleware/getUser');

var bodySchema = Joi.object({
    name:Joi.string().required().error(new Error("Please enter name"))
});

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', userController.user_list);

router.get('/cool', function (req, res, next) {
  res.send('You are so cool');
});





// router.post('/store', ExpressJoi(bodySchema), userController.user_store);
router.post('/store', userController.user_store);
router.put('/:userId', getUser, userController.user_update);
router.delete('/:userId', userController.user_delete);

module.exports = router;
