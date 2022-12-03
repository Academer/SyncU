const express = require("express");
const toolControllers = require("../controllers/toolControllers");

const routers = express.Router();

routers.get("/", toolControllers.home);

routers.get("/link-preview", toolControllers.getLink);
routers.post("/link-preview", toolControllers.postLink);
routers.get("/link-preview/preview", toolControllers.preview);

module.exports = routers;
