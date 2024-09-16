const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const router = require("./router/index");

const app = express();

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// init db
require("./dbs/initMongo");

// init router
app.use("/", router);

// handle errors
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  console.log("Error::", error.message);
  res.json({
    status: "error",
    message: error.message,
  });
});

module.exports = app;
