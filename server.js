const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const notesRouter = require('./routes/notes');
const dotenv = require('dotenv');
dotenv.config()
const coonnecDB = require("./config/db.js")

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

coonnecDB();

// Routes
app.use('/api/notes', notesRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});