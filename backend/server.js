const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());

// API
const Products = require("./Api/Products");
const headphones = require("./Api/headphones");
const Watches = require("./Api/Watches");

const PORT = process.env.PORT || 5000;

app.get("/wireless", (req, res) => {
  res.status(200).send(Products);
});

app.get("/headphones", (req, res) => {
  res.status(200).send(headphones);
});
app.get("/watch", (req, res) => {
  res.status(200).send(Watches);
});

app.listen(`${PORT}`, () => {
  console.log(`Server is running on ${PORT}`);
});
