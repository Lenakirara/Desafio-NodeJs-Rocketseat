const summaryModels = require('../models/studySummaryModels');

const createSummaries = async (summary) => {
  const summaries = await summaryModels.createSummaries(summary);
  return summaries;
};

module.exports = {
  createSummaries,
};
