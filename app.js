const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const mainRoutes = require("./routes/mainRoutes.js");
const toolRoutes = require("./routes/toolRoutes");
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(mainRoutes);
app.use("/tools", toolRoutes);
app.use("*", (req_, res) => {
  res.render("404.ejs");
});

app.listen(process.env.PORT || 3001);
