const Contacts = require("../../models/contacts");
const httpStatus = require("../../helpers/httpStatus");

const createContact = async (req, res) => {
  const { _id: owner } = req.user;
  const data = await Contacts.create(...req.body, owner);

  !data ? httpStatus(400) : httpStatus(201);

  res.json(data);
};

module.exports = createContact;
