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
} = require("../controllers/contactsControllers");
const isValid = require("../helpers/validateObjectId");

// ---------------------------------------------------

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", isValid, getOneContact);

contactsRouter.delete("/:id", isValid, deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put(
  "/:id",
  isValid,
  validateBody(updateContactSchema),
  updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  isValid,
  validateBody(updateContactSchema),
  updateContact
);

module.exports = contactsRouter;
