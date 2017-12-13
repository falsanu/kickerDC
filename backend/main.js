// Loading dependencies
const config = require('./config/config.json');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
// const ws = require('express-ws')(app);



const mongoConnectionString = process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost/KickerDC';
const serverPort = process.env.SERVER_PORT || 8080;
const socketPort = process.env.SOCKET_PORT || 8090;




// Setting environment variables
const port = config.port;

// Loading tables
const Table = require('./models/table/table.model');

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

const routes = require('./routes/table/table.route'); //importing route
routes(app); //register the route


// Starting Server
let server = app.listen(serverPort);

const io = require('socket.io')(socketPort);
io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});

	socket.on('foo', (msg)=>{
		console.log(msg)
	})
});








/**
 * this part for SSL server

 const privateKey = fs.readFileSync( 'privatekey.pem' );
 const certificate = fs.readFileSync( 'certificate.pem' );

 https.createServer({
    key: privateKey,
    cert: certificate
}, app).listen(port);
 */


