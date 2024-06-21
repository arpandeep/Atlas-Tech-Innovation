import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import roomRouter from './routes/roomRouter.js';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: 'GET,POST,PUT,PATCH,DELETE',
  allowedHeaders: 'X-Requested-With,Content-Type,Authorization',
};

app.use(cors(corsOptions));

app.use(express.json({ limit: '10mb' }));
app.use('/user', userRouter);
app.use('/room', roomRouter);
app.use('/', (req, res) => res.json({ message: "Welcome to our API" }));
app.use((req, res) => res.status(404).json({ success: false, message: "not found" }));

const startServer = async () => {
  try {
    console.log("Environment Variables:");
    console.log("MongoDB Connection String:", process.env.MONGO_CONNECT);
    console.log("Client URL:", process.env.CLIENT_URL);
    console.log("Port:", port);
    console.log("Google Client ID:", process.env.GOOGLE_CLIENT_ID);
    await mongoose.connect(process.env.MONGO_CONNECT);
    app.listen(port, () => console.log(`Server is listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
