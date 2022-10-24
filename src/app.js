const { NODE_ENV = "development" } = process.env;
const express = require("express");
const app = express();

const pong = (req, res, next) => {
  res.send("pong!")
}

const greeting = (req, res, next) => {
  res.send("Welcome to my server.")
}

app.get('/ping', pong)
app.get('/welcome', greeting)

module.exports = app;
