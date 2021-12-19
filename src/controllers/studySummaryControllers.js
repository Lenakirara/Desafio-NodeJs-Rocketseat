const summaryServices = require('../services/studySummaryServices');

const getAllSummaries = async (req, res) => {
  try {
    const getSummaries = await summaryServices.getAllSummaries();
    return res.status(200).json(getSummaries);
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

const findSummaryById = async (req, res) => {
  const { id } = req.params;
  try {
    const summaryId = await summaryServices.findSummaryById(id);
    if (!summaryId) {
      return res.status(404).json({ message: 'Summary Not Found' });
    }
    return res.status(200).json(summaryId);
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

const createSummaries = async (req, res) => {
  const { title, subtitle, abstract } = req.body;
  try {
    const summary = await summaryServices.createSummaries({ title, subtitle, abstract });
    return res.status(201).json(summary);
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

const updateSummary = async (req, res) => {
  const { id } = req.params;
  const { title, subtitle, abstract } = req.body;
  try {
    const editSummary = await summaryServices.updateSummary(id, {title, subtitle, abstract});
    if (!editSummary) {
      return res.status(400).json({ message: 'Invalid entries.' });
    }
    return res.status(200).json(editSummary);
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

const deleteSummary = async (req, res) => {
  const { id } = req.params;
  try {
    const removeSummary = await summaryServices.deleteSummary(id);
    return res.status(204).json(removeSummary);
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
}

module.exports = {
  createSummaries,
  findSummaryById,
  getAllSummaries,
  updateSummary,
  deleteSummary,
};
