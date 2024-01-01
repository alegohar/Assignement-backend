const app = require("./app")
const express = require("express");
const mongoose = require ("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const PORT = 5000;
app.listen(PORT, () => {
  console.log("server started port no :" + PORT);
});

