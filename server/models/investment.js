const mongoose = require("mongoose");

const Investment = mongoose.model(
  "Investment",
  new mongoose.Schema({
    company: String,
    intialValue: Number,
    curValue: Number
  })
);

module.exports = Investment;