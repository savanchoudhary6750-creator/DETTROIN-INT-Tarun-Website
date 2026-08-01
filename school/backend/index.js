import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`===================================================`);
  console.log(`🚀 Pavna School Express API Server running on port ${PORT}`);
  console.log(`📍 Endpoint: http://localhost:${PORT}/api/contact`);
  console.log(`===================================================`);
});
