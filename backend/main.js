const config = require('./config/config');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const https = require('https');
const http = require('http');

const fs = require('fs');

const {
	mongoConnectionString,
	serverPort,
	socketPort,
	pathToKey,
	pathToCert,
	nodeEnv,
} = config;

// Loading schema
const Table = require('./models/table/table.model');
const User = require('./models/user/user.model');
const Statistic = require('./models/statistic/statistic.model');

// Loading Services to inject dependencies
const TableController = require('./controllers/table/table.controller');

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(mongoConnectionString);

// Configure the server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(cors());
app.options('*', cors());

const routes = require('./routes/routes'); //importing route
routes(app); //register the route

// Starting Server
let server = app.listen(serverPort);

let socketServer = null;

if (nodeEnv === 'development') {
	socketServer = http.createServer(app)
} else {
	// Creating HTTPS Socket Server
	// This is kind of creepy, but it works
	const privateKey = fs.readFileSync( pathToKey );
	const certificate = fs.readFileSync( pathToCert );
	socketServer = https.createServer({
		key: privateKey,
		cert: certificate
	}, app)
}

socketServer.listen(socketPort);

const io = require('socket.io')(socketServer, {
	serveClient: true,

	// below are engine.IO options
	pingInterval: 10000,
	pingTimeout: 5000,
	cookie: false
});

TableController.injectDependency('sockets', io);

