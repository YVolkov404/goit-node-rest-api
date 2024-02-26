const ctrlWrapper = require("../../helpers/ctrlWrapper");
const current = require("./current");
const login = require("./login");
const register = require("./register");
const logout = require("./logout");
const avatar = require("./avatar");
const emailAudit = require("./emailAudit.js");
const resentEmailAudit = require("./resentEmailAudit");

module.exports = {
  current: ctrlWrapper(current),
  login: ctrlWrapper(login),
  register: ctrlWrapper(register),
  logout: ctrlWrapper(logout),
  avatar: ctrlWrapper(avatar),
  emailAudit: ctrlWrapper(emailAudit),
  resentEmailAudit: ctrlWrapper(resentEmailAudit),
};
