const express = require("express");
const router = express.Router();
const Message = require("../models/message");

/* GET home page. */
router.get("/", async function (req, res) {
  const messages = await Message.find().sort({ added: 1 }).limit(10);
  res.render("index", { title: "Mini Message Board", messages: messages });
});

module.exports = router;
