const summaryServices = require('../services/studySummaryServices');

const createSummaries = async (req, res) => {
  const { title, subtitle, abstract  } = req.body;
  try {
    const summary  = await summaryServices.createSummaries({title, subtitle, abstract});
    return res.status(201).json(summary);
  } catch (e) {
    return res.status(500).json({ message: 'Server Error' });
  }
}

module.exports = {
  createSummaries,
};
