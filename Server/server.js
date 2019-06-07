const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const prot = process.env.PORT || 5000;
//Mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/SharSound");

//stars the server
app.listen(prot, () => {
  console.log(`Server online ${prot}`);
});
