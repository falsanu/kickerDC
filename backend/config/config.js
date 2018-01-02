module.exports = {
  socketPort: process.env.SOCKET_PORT || 8090,
  serverPort: process.env.SERVER_PORT || 8080,
  pathToKey: process.env.PATH_TO_KEY || 'privatekey.pem',
  pathToCert: process.env.PATH_TO_CERT || 'certificate.pem',
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoConnectionString: process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost/KickerDC',
  accessLevel: {
    USER: 0,
    ADMIN: 1
  }
};
