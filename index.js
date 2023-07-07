const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const mongoose = require("mongoose");
const { url } = require("./models/connection");
const testConnection = require("./models/connectionTest");

mongoose.connect(url, { useNewUrlParser: true });
testConnection(url);
const home = require("./routes/homeRoute");
const addOrganisation = require("./routes/addOrganisation");
const loginOrganisation = require("./routes/loginOrganisation");
const addMember = require("./routes/addMember");
const memberSignup = require("./routes/memberSignup");

app.use("/", home)
app.use("/", addOrganisation)
app.use("/", loginOrganisation)
app.use("/", addMember)
app.use("/", memberSignup)

module.exports = app;