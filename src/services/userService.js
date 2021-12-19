const userModels = require('../models/userModel');

const getAllUsers = async () => {
  const users = await userModels.getAllUsers();
  return users;
};

const createUser = async (name, email, password) => {
  const userCreated = await userModels.createUser(name, email, password);
  return userCreated;
};

module.exports = {
  getAllUsers,
  createUser,
};
