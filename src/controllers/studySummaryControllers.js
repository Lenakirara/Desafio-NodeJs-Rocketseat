const summaryServices = require('../services/studySummaryServices');

const getAllSummaries = async (req, res) => {
  try {
    const getSummaries = await summaryServices.getAllSummaries();
    return res.status(200).json(getSummaries);
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
}

const createSummaries = async (req, res) => {
  const { title, subtitle, abstract  } = req.body;
  try {
    const summary  = await summaryServices.createSummaries({title, subtitle, abstract});
    return res.status(201).json(summary);
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
}

module.exports = {
  createSummaries,
  getAllSummaries,
};
