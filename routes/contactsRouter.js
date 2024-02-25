const express = require("express");
const validateBody = require("../helpers/validateBody");
const {
  createContactSchema,
  updateContactSchema,
} = require("../schemas/contactsSchemas");
const {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
} = require("../controllers/contacts/index");
const isValid = require("../helpers/validateObjectId");
const auth = require("../helpers/auth");

// ---------------------------------------------------

const contactsRouter = express.Router();

contactsRouter.get("/", auth, getAllContacts);

contactsRouter.get("/:id", auth, isValid, getOneContact);

contactsRouter.delete("/:id", auth, isValid, deleteContact);

contactsRouter.post(
  "/",
  auth,
  validateBody(createContactSchema),
  createContact
);

contactsRouter.put(
  "/:id",
  auth,
  isValid,
  validateBody(updateContactSchema),
  updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  auth,
  isValid,
  validateBody(updateContactSchema),
  updateContact
);

module.exports = contactsRouter;
