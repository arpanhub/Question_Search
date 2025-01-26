require('dotenv').config();

const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI;
const COLLECTION_NAME = process.env.COLLECTION_NAME;
let db; 

async function ConnectedDB() {
  try {
    if (!db) {
       await mongoose.connect(dbURI, {
        serverSelectionTimeoutMS: 5000,
        tls: true,
      });
      db = mongoose.connection.db;
      console.log('Connected to MongoDB');
      return db; 
    } else {
      return db;
    }
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    throw error; 
  }
}

async function getQuestionsCollection() {
  const database = await ConnectedDB();
  console.log("Connected to the collection:", COLLECTION_NAME);
  return database.collection(COLLECTION_NAME);
}

module.exports = { getQuestionsCollection, ConnectedDB };