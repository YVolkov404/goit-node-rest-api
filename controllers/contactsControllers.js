const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContactById,
} = require("../services/contactsServices");
const httpStatus = require("../helpers/httpStatus");
const ctrlWrapper = require("../helpers/ctrlWrapper");

const getAllContacts = async (req, res) => {
  const data = await listContacts();
  if (data) {
    throw httpStatus(200);
  }
  // !data ? httpStatus(404) : httpStatus(200);
  res.json(data);
};

const getOneContact = async (req, res) => {
  const { id } = req.params;
  const data = await getContactById(id);
  if (!data) {
    throw httpStatus(404);
  }
  // !data ? httpStatus(404) : httpStatus(200);
  res.json(data);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const data = await removeContact(id);
  if (!data) {
    throw httpStatus(404);
  }
  // !data ? httpStatus(404) : httpStatus(200);
  res.json(data);
};

const createContact = async (req, res) => {
  const data = await addContact(req.body);
  if (!data) {
    throw httpStatus(400);
  }
  // !data ? httpStatus(400) : httpStatus(201);
  res.json(data);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const data = await updateContactById(id, req.body);
  if (!data) {
    throw httpStatus(404);
  }
  // !data ? httpStatus(404) : httpStatus(200);
  res.json(data);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
  deleteContact: ctrlWrapper(deleteContact),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
};
