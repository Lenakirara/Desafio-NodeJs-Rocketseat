const { ObjectId } = require('mongodb'); 
const connection = require('./connection');

const getAllSummaries = async () => {
  const db = await connection();
  const getSummaries = await db.collection('summaries').find().toArray();
  return getSummaries;s
};

const findSummaryById = async (id) => {
  const db = await connection();
  const summaryId = await db.collection('summaries').findOne({ _id: ObjectId(id) });
  if (!summaryId) return null;
  return summaryId;
}

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

const updateSummary = async (id, summary) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  await db.collection('summaries').updateOne(
    { _id: ObjectId(id) },
    { $set: { ...summary }},
  );
  return  {
    _id: id,
    ...summary,
  }
};

module.exports = {
  createSummaries,
  findSummaryById,
  getAllSummaries,
  updateSummary
};
