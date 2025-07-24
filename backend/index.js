import express from 'express';
import mongoose from 'mongoose';
import authRouter from './routers/authRouter.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const ipAddress = process.env.IP_ADDRESS;
app.use(cors());
app.use(express.json());

app.use(cors({
  origin: process.env.EXPO_PUBLIC_API_URL,
  credentials: true,
}));

app.use('/api/auth', authRouter);
console.log(process.env.MONGO_DB_URI);

mongoose.connect(process.env.MONGO_DB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  console.error('Error:', err);
  res.status(statusCode).json({ message });
});

app.listen(3000, ipAddress||'localhost', () => {
    console.log(`Server is running on port ${3000} ${ipAddress||'localhost'}`);
});
