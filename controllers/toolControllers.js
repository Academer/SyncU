const link = require("link-preview-js");
const express = require("express");
let title, des;

// linkPreview("https://www.youtube.com/watch?v=LG1wb2JWoRQ&t=2s");

// const routers = express.Router();

const home = (req, res) => {
  // let isLoggedIn;
  // if (req.session.currentUser) {
  //   isLoggedIn = true;
  //   console.log(true);
  // } else {
  //   isLoggedIn = false;
  //   console.log(false);
  // }
  res.render("tool.ejs", {
    css: "index",
  });
  // res.render("tool.ejs", { isLoggedIn: isLoggedIn });
};

const getLink = (req, res, next) => {
  res.render("link.ejs", {
    title: "Hello saare duniya waalo",
    error: undefined,
  });
};

let url;
const postLink = (req, res, next) => {
  //   console.log(req.body);
  url = req.body.title;
  //   console.log(url.title);
  res.redirect("/tools/link-preview/preview");
};

const preview = async (req, res, next) => {
  try {
    console.log("preview");
    const data = await link.getLinkPreview(`${url}`);
    res.render("preview.ejs", {
      title: data.title,
      description: data.description,
      img: data.images[0],
      url: url,
    });
  } catch (err) {
    console.log(err.message);
    res.render("link.ejs", {
      error: err.message.replace("link-preview-js", "We"),
    });
  }
};

module.exports = { home, getLink, postLink, preview };
