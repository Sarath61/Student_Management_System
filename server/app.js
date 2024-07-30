const express = require("express");
const userRouters = require("./routers/userRouters");

const app = express();

app.use("/erp/user", userRouters);
// app.use("/erp/admin");

module.exports = app;
