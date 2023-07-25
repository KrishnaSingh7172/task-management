import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const db = mongoose
  .connect(process.env.DATABASE_URI || '')
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.log(`Unable to connect the database ${err}`);
  });

export default db;
