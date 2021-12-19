const userModel = require('../models/userModel');

const validateEmailPasswordLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const emailRegx = /\S+@\S+\.\S+/;
  if (!password || !email) {
    return res.status(401).json({ message: 'All fields must be filled.' });
  }
  if (!emailRegx.test(email)) {
    return res.status(401).json({ message: 'Invalid email.' });
  }  
  next();
}

const checkEmailPasswordLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const checkEmail = await userModel.getEmailExist(email);

  if(!checkEmail || checkEmail.email !== email) {
    return res.status(401).json({ message: 'Incorrect user or password.' });
  };

  if (!checkEmail || checkEmail.password !== password) {
    return res.status(401).json({ message: 'Incorrect user or password.' });
  }
  next();
};

module.exports = {
  validateEmailPasswordLogin,
  checkEmailPasswordLogin,
}
