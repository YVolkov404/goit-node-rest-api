const ctrlWrapper = require("../../helpers/ctrlWrapper");
const current = require("./current");
const login = require("./login");
const register = require("./register");
const logout = require("./logout");
const avatar = require("./avatar");

module.exports = {
  current: ctrlWrapper(current),
  login: ctrlWrapper(login),
  register: ctrlWrapper(register),
  logout: ctrlWrapper(logout),
  avatar: ctrlWrapper(avatar),
};
