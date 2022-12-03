const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const mainRoutes = require("./routes/mainRoutes.js");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(mainRoutes);

app.listen(3001);
