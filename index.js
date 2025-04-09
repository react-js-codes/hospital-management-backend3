const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Basic route for testing
app.get('/', (req, res) => res.send('Hospital Backend Running'));

// MongoDB Connection (remove deprecated options)
const mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use Render's assigned port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));