const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ],
    investments: [
        {
            type: mongoose.Schema.Types.Array,
            ref: "Investment"
          }
    ]
  })
);

module.exports = User;