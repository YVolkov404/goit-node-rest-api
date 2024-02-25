const Contacts = require("../models/contacts");
const httpStatus = require("../helpers/httpStatus");

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const data = await Contacts.findByIdAndUpdate(id, req.body, { new: true });
  !data ? httpStatus(404) : httpStatus(200);
  res.json(data);
};

module.exports = updateFavorite;
