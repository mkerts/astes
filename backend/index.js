'use strict';

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes'); // Import route modules

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/astes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});

app.use(express.json());
app.use('/api', routes); // Use imported routes

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
