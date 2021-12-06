const router = require('express').Router();

const {
  validateEmailPasswordLogin,
  checkEmailPasswordLogin,
} = require('../middlewares/loginValidation');

const {
  userLogin
} = require('../controllers/loginController');

router.post('/',
  validateEmailPasswordLogin,
  checkEmailPasswordLogin,
  userLogin);

module.exports = router;