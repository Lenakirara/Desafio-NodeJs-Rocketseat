const connection = require('./connection');

const getAllSummaries = async () => {
  const db = await connection();
  const getSummaries = await db.collection('summaries').find().toArray();
  if (!getSummaries) return null;
  return getSummaries;
};

const createSummaries = async (summary) => {
  const db = await connection();
  const summaries = await db.collection('summaries').insertOne({
    ...summary
  })
  return {
    _id: summaries.insertedId,
    ...summary    
  }
};

module.exports = {
  createSummaries,
  getAllSummaries
};
