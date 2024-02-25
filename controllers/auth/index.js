const ctrlWrapper = require("../../helpers/ctrlWrapper");
const current = require("./current");
const login = require("./login");
const register = require("./register");
const logout = require("./logout");

module.exports = {
  current: ctrlWrapper(current),
  login: ctrlWrapper(login),
  register: ctrlWrapper(register),
  logout: ctrlWrapper(logout),
};
