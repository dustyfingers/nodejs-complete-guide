// import third party modules
const express = require('express');
const bodyParser = require('body-parser');

// import routes
const feedRoutes = require('./routes/feed');

// init express app
const app = express();

// set bodyparser to use json
app.use(bodyParser.json());

// * set universal request headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// set routes
app.use('/feed', feedRoutes);

// start server on port 8080
app.listen(8080);