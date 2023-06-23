const express = require("express");
const router = express.Router();
const Message = require("../models/message");

router.get("/", function (req, res) {
  res.render("form", {
    title: "Mini Message Board: New Message",
    text: "",
    user: "",
    error: "",
  });
});

router.post("/", async function (req, res) {
  const trimmedUser = req.body.user.trim();
  const trimmedText = req.body.text.trim();

  const inputErrors =
    trimmedUser.length === 0 ||
    trimmedUser.length > 20 ||
    trimmedText.length === 0 ||
    trimmedText.length > 1000;

  if (inputErrors) {
    res.render("form", {
      title: "Mini Message Board: Fix Your Message",
      user: trimmedUser,
      text: trimmedText,
      error:
        "User names must be between 1 and 20 characters long and messages must be between 1 and 1000 characters long.",
    });
    return;
  }

  const newMessage = new Message({
    user: trimmedUser,
    text: trimmedText,
  });

  await newMessage.save();

  res.redirect("/");
});

module.exports = router;
