const ctrlWrapper = require("../../helpers/ctrlWrapper");
const getAllContacts = require("./getAllContacts");
const getOneContact = require("./getOneContact");
const deleteContact = require("./deleteContact");
const createContact = require("./createContact");
const updateContact = require("./updateContact");
const updateFavorite = require("./updateFavorite");

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
  deleteContact: ctrlWrapper(deleteContact),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
  updateFavorite: ctrlWrapper(updateFavorite),
};
