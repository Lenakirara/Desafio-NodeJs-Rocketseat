const userServices = require('../services/userService');

const getAllUsers = async (req, res) => {
  try {
    const users = await userServices.getAllUsers();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ error: 'Oh no!!! Server error!!!' });
  }
}

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await userServices.createUser(name, email, password);
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ error: 'Oh no!!! Server error!!!' });
  }
};

module.exports = {
  getAllUsers,
  createUser,
};