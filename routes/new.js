var express = require("express");
var router = express.Router();
var messages = require("../data/messages");

router.get("/", function (req, res) {
  res.render("form", { title: "Mini Message Board: New Message" });
});

router.post("/", function (req, res) {
  const { user, message } = req.body;
  messages.push({ text: message, user: user, added: new Date() });
  res.redirect("/");
});

module.exports = router;
