require('dotenv').config();
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

// app
const app = express();

// IMPORTING ROUTEs
const routes = require('./routes/routes');


// DB Connection
mongoose.set('strictQuery', false);
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/raspberry');
    
}


// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


// Routes
app.use('/api', routes);
app.use(express.static('public'));


app.listen(8000);

    