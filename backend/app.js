import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRouter from './routes/auth.js';

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.use('/', authRouter);

mongoose
  .connect('mongodb+srv://ishmael:dostojevski@cluster0.oqgfe.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
