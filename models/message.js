const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  text: { type: String, required: true, minlength: 1, maxlength: 1000 },
  user: { type: String, required: true, minlength: 3, maxlength: 20 },
  added: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Message", MessageSchema);
