const express = require("express");
const mainControllers = require("../controllers/mainControllers");
const Router = express.Router();

Router.get("/", mainControllers.home);

module.exports = Router;
