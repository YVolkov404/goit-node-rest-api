const Contacts = require("../models/contacts");
const httpStatus = require("../helpers/httpStatus");

const createContact = async (req, res) => {
  const data = await Contacts.create(req.body);
  !data ? httpStatus(400) : httpStatus(201);
  res.json(data);
};

module.exports = createContact;
