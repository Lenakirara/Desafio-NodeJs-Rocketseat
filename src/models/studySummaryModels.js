const connection = require('./connection');

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
};
