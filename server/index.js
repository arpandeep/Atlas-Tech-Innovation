// import express from 'express';
// import dotenv from 'dotenv';
// import roomRouter from './routes/roomRouter.js';
// import mongoose from 'mongoose';
// import userRouter from './routes/userRouter.js';

// dotenv.config();

// const port = process.env.PORT || 5000;

// const app = express();

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'GET, POST, PUT, PATCH, DELETE'
//   );
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'X-Requested-With, Content-Type, Authorization'
//   );
//   next();
// });

// app.use(express.json({ limit: '10mb' }));
// app.use('/user', userRouter);
// app.use('/room', roomRouter);
// app.get('/', (req, res) => res.json({ message: 'Welcome to our API' }));
// app.use((req, res) =>
//   res.status(404).json({ success: false, message: 'Not Found' })
// );

// const startServer = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_CONNECT);
//     app
//       .listen(port, () => console.log(`Server is listening on port: ${port}`))
//       .on('error', (e) => {
//         console.log('Error happened: ', e.message);
//       });
//   } catch (error) {
//     console.log(error);
//   }
// };

// startServer();


// import express from 'express';
// import dotenv from 'dotenv';
// import roomRouter from './routes/roomRouter.js';
// import mongoose from 'mongoose';
// import userRouter from './routes/userRouter.js';

// dotenv.config();

// const port = process.env.PORT || 5000;

// const app = express();

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
//   next();
// });

// app.use(express.json({ limit: '10mb' }));
// app.use('/user', userRouter);
// app.use('/room', roomRouter);
// app.get('/', (req, res) => res.json({ message: 'Welcome to our API' }));
// app.use((req, res) => res.status(404).json({ success: false, message: 'Not Found' }));

// const startServer = async () => {
//   try {
//     mongoose.set('strictQuery', false); // Add this line to handle the deprecation warning
//     await mongoose.connect(process.env.MONGO_CONNECT, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//     app.listen(port, () => {
//       console.log(`Server is listening on port: ${port}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// startServer();


import express from 'express';
import dotenv from 'dotenv';
import roomRouter from './routes/roomRouter.js';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Content-Type, Authorization'
  );
  next();
});

app.use(express.json({ limit: '10mb' }));
app.use('/user', userRouter);
app.use('/room', roomRouter);
app.get('/', (req, res) => res.json({ message: 'Welcome to our API' }));
app.use((req, res) =>
  res.status(404).json({ success: false, message: 'Not Found' })
);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECT);
    console.log('Connected to MongoDB');
    app
      .listen(port, () => console.log(`Server is listening on port: ${port}`))
      .on('error', (e) => {
        console.log('Error happened: ', e.message);
      });
  } catch (error) {
    console.log('MongoDB connection error:', error);
  }
};

startServer();