import express from 'express';
import mongoose from 'mongoose';
import authRouter from './routers/authRouter.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.use(authRouter);
console.log(process.env.MONGO_DB_URI);

mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
