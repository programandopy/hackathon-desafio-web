const express = require('express');
const mongoose = require('mongoose');
const app = express();
const mapsApi = require('./api/MapsApi');
const userApi = require('./api/UserApi');
const securityApi = require('./api/SecurityApi');
const cors = require('cors');
require('dotenv').config();

// middleware
app.use(express.json());
app.use(cors());

// database connection
mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database!');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((error) => console.log('Connection failed!', error));

// routes
app.use('/api/maps/', mapsApi);
app.use('/api/user/', userApi);
app.use('/api/security/', securityApi);
