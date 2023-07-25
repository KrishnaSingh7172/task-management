import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import './src/config/db.config.js';
import bodyParser from 'body-parser';
import routes from './src/routes/index.js';

const app = express();
dotenv.config();

const corsOpts = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['*'],
};

app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 50000,
    extended: true,
  }),
);
app.use(bodyParser.json());
app.use(cors(corsOpts));
routes(app);

app.get('/', (req, res) => {
  console.log('Welcome to the Task Management API');
  res.json({
    status: 200,
    message: 'Welcome to the Task Management API',
    data: 'Welcome',
  });
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
