const connection = require('./connection');

const getAllUsers = async () => {
  const db = await connection();
  const users = await db.collection('users').find().toArray();
  return users;
};

const createUser = async (name, email, password) => {
  const db = await connection();
  const user = await db.collection('users').insertOne({
    name,
    email,
    password,});
  return {
    name,
    email,
    _id: user.insertedId,
  };
};

module.exports = {
  getAllUsers,
  createUser,
}