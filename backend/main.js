// Loading dependencies
const config = require('./config/config.json');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Setting environment variables
const app = express();
const port = config.port;

// Loading tables
const Table = require('./models/table/table.model');

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/KickerDC');

// Configure the server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend')));

const routes = require('./routes/table/table.route'); //importing route
routes(app); //register the route

// Starting Server
const server = app.listen(port);
