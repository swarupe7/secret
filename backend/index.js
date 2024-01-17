// server.js
const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('../backend/api/auth');
const secretRoutes = require('../backend/api/secret');


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb+srv://20pa1a05e7:20pa1a05e7@cluster0.io9dan3.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Add middleware and routes here

app.use('/api/auth', authRoutes);
app.use('/api/secret', secretRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
