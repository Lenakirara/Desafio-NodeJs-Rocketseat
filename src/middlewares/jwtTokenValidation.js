const JWT = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const validateJWTToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Missing Auth Token' });
  }
  try {
    const payload = JWT.verify(token, SECRET);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token Authentication Problem' }); 
  }
};

module.exports = {
  validateJWTToken,
};
