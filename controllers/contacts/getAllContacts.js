const Contacts = require("../../models/contacts");
const httpStatus = require("../../helpers/httpStatus");

const getAllContacts = async (req, res, next) => {
  const { _id: owner } = req.user;

  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const data = await Contacts.find({ owner }, "-createdAT -updateAt", {
    skip,
    limit,
  }).populate("owner", "email");

  !data ? httpStatus(404) : httpStatus(200);

  res.json(data);
};

module.exports = getAllContacts;
