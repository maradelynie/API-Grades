import mongoose from 'mongoose';

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
console.log(process.env.MONGODB)
export { db };
