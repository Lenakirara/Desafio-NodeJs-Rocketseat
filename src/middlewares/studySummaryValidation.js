const validateSummaries = async (req, res, next) => {
  const { title, subtitle, abstract } = req.body;
  if (!title || !subtitle || !abstract) {
    return res.status(400).json({ message: 'Invalid entries.' });
  }
  next();
};

module.exports = {
  validateSummaries,
};
