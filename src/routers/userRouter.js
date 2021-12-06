const router = require('express').Router();

const {
  validateUserField,
  validateUserEmail,
  validateUserPassword,
} = require('../middlewares/userValidation');

const {
  getAllUsers,
  createUser,
} = require('../controllers/userController');

router.get('/', getAllUsers);
router.post('/',
  validateUserField,
  validateUserEmail,
  validateUserPassword,
  createUser);

module.exports = router;