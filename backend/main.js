// Loading dependencies
const config = require('./config/config.json');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
// Setting environment variables
const port = config.port;

// Loading tables
const Table = require('./models/table/table.model');

// Loading Services to inject dependencies
const TableController = require('./controllers/table/table.controller');

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
let server = app.listen(port);

const io = require('socket.io')(server);


// injecting dependencies
TableController.importDependency('sockets', io);