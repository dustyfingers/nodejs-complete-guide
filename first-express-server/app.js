const express = require("express");
const bodyParser = require('body-parser');

// import routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// init express app
const app = express();

// set up bodyparsing
app.use(bodyParser.urlencoded({extended: false}));

// set up routes
app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

// no page found route
app.use((req, res, next) => {
  res.status(404).send('<h1>No page found :(</h1>');
});

// start server
app.listen(3000);
