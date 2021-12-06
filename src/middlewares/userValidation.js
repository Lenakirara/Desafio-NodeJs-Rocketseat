const userModel = require('../models/userModel');

const validateUserField = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Invalid entries!' });
  }
  next();
};

const validateUserEmail = async (req, res, next) => {
  const { email } = req.body;
  const emailRegx = /\S+@\S+\.\S+/;
  if (!emailRegx.test(email)) {
    return res.status(400).json({ message: 'Invalid email entry.' });
  }
  next();
};

const validateUserPassword = async (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be 6 characters or more.' }); 
  }
  next();
}

module.exports = {
  validateUserField,
  validateUserEmail,
  validateUserPassword,
};
