const Contacts = require("../../models/contacts");
const httpStatus = require("../../helpers/httpStatus");

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const data = await Contacts.findByIdAndDelete(id);
  !data ? httpStatus(404) : httpStatus(200);
  res.json(data);
};

module.exports = deleteContact;
