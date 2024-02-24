const Contacts = require("../models/contacts");
const httpStatus = require("../helpers/httpStatus");
const ctrlWrapper = require("../helpers/ctrlWrapper");

const getAllContacts = async (res) => {
  const data = await Contacts.find({}, "-updateAt");
  !data ? httpStatus(404) : httpStatus(200);
  res.json(data);
};

const getOneContact = async (req, res) => {
  const { id } = req.params;
  const data = await Contacts.findById(id);
  !data ? httpStatus(404) : httpStatus(200);
  res.json(data);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const data = await Contacts.findByIdAndDelete(id);
  !data ? httpStatus(404) : httpStatus(200);
  res.json(data);
};

const createContact = async (req, res) => {
  const data = await Contacts.create(req.body);
  !data ? httpStatus(400) : httpStatus(201);
  res.json(data);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const data = await Contacts.findByIdAndUpdate(id, req.body, { new: true });
  !data ? httpStatus(404) : httpStatus(200);
  res.json(data);
};

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const data = await Contacts.findByIdAndUpdate(id, req.body, { new: true });
  !data ? httpStatus(404) : httpStatus(200);
  res.json(data);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
  deleteContact: ctrlWrapper(deleteContact),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
  updateFavorite: ctrlWrapper(updateFavorite),
};
