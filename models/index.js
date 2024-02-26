const registerSchema = require("./register");
const loginSchema = require("./login");
const emailAuditSchema = require("./audit");
const User = require("./users");

module.exports = { registerSchema, loginSchema, emailAuditSchema, User };
