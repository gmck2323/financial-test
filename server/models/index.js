const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user");
db.role = require("./role");
db.investment = require("./investment");

db.ROLES = ["user", "admin"];

module.exports = db;