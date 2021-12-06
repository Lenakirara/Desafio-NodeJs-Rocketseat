const loginService = require('../services/loginService');

const userLogin = async (req, res) => {
  const { email } = req.body;
  try {
    const token = await loginService.userLogin(email);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ error: 'Oh no!!! Server error!!!' });
  }
};

module.exports = {
  userLogin,
}