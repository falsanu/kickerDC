// Loading dependencies
const config = require('./config/config.json');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const ws = require('express-ws')(app);

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
app.use(cors());
app.options('*', cors());

const routes = require('./routes/table/table.route'); //importing route
routes(app); //register the route

// Starting Server
let server = app.listen(port);

/**
 * this part for SSL server

 const privateKey = fs.readFileSync( 'privatekey.pem' );
 const certificate = fs.readFileSync( 'certificate.pem' );

 https.createServer({
    key: privateKey,
    cert: certificate
}, app).listen(port);
 */

app.ws('/', function(ws, req) {
  ws.on('foo', function(msg) {
    console.log(msg);
  });
  console.log('socket', req.testing);
});
