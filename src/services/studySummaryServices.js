const { ObjectId } = require('mongodb'); 
const summaryModels = require('../models/studySummaryModels');

const getAllSummaries = async () => {
  const getSummaries = await summaryModels.getAllSummaries();
  return getSummaries;
}

const findSummaryById = async (id) => {
  if (!ObjectId.isValid(id)) return false;
  const summaryId = await summaryModels.findSummaryById(id);
  return summaryId;
}

const createSummaries = async (summary) => {
  const summaries = await summaryModels.createSummaries(summary);
  return summaries;
};

module.exports = {
  createSummaries,
  findSummaryById,
  getAllSummaries,
};
