import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import route from '../routes/userRoute.js';
import cors from 'cors';
import serverless from 'serverless-http';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log('Database connected successfully.');
  })
  .catch((error) => console.log(error));

app.use('/.netlify/functions/api/cars', route);

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
  });
}

export const handler = serverless(app);
