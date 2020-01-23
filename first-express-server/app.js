const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// import routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// init express app
const app = express();

// set up bodyparsing
app.use(bodyParser.urlencoded({ extended: false }));
// set up public folder to serve public content
app.use(express.static(path.join(__dirname, 'public')));

// set up routes
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

// no page found route
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// start server
app.listen(3000);
