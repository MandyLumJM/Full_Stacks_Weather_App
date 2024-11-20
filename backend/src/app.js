const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./db');
const weatherRoutes = require('./routes/weatherRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
connectToDatabase();

// Routes
app.use('/api/weather', weatherRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
