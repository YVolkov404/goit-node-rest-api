const Contacts = require("../models/contacts");
const httpStatus = require("../helpers/httpStatus");

const getAllContacts = async (res) => {
  const data = await Contacts.find({}, "-updateAt");
  !data ? httpStatus(404) : httpStatus(200);
  res.json(data);
};

module.exports = getAllContacts;
