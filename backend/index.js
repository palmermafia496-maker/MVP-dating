import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('MVP Dating App Backend is running!');
});

// TODO: Add your API routes here

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
