const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const route = express.Router();

route.post("/login", authController.login);
route.post("/sigup", authController.signUp);


module.exports = route;
