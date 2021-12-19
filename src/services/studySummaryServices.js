const summaryModels = require('../models/studySummaryModels');

const getAllSummaries = async () => {
  const getSummaries = await summaryModels.getAllSummaries();
  return getSummaries;
}

const createSummaries = async (summary) => {
  const summaries = await summaryModels.createSummaries(summary);
  return summaries;
};

module.exports = {
  createSummaries,
  getAllSummaries,
};
