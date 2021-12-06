require('dotenv').config();
const JWT = require('jsonwebtoken');
const userModel = require('../models/userModel');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '30d',
  algorithm: 'HS256',
};

const userLogin = async (email) => {
  const { _id } = await userModel.getEmailExist(email);

  const userWithoutPassword = {
    id: _id,
  }

  const token = JWT.sign({ data: userWithoutPassword }, SECRET, jwtConfig);
  return token;
};

module.exports = {
  userLogin,
};