/*
    De Fiesta API
*/

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const router = require("./routes");

// Global app object
const app = express();

// Middleware config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

mongoose.connect(
    process.env.MONGO_URI,
    { useUnifiedTopology: true, useNewUrlParser: true }
);

app.use(router);


// Bootstrap server
const server = app.listen(process.env.PORT || 3000, function () {
    console.log(`Listening on port ${server.address().port}`);
});