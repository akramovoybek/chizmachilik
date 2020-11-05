const express = require("express");
const app = express();

app.use("/", require("./html"));
app.use("/", require("./admin"));

module.exports = app;