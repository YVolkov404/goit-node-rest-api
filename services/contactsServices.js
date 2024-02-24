const { uid } = require("uid");
const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join("db/contacts.json");

async function listContacts() {
  const response = await fs.readFile(contactsPath);
  return JSON.parse(response);
}

async function getContactById(id) {
  const response = await listContacts();
  const contactById = response.find((res) => res.id === id);
  return contactById || null;
}

async function removeContact(id) {
  const response = await listContacts();
  const index = response.findIndex((res) => res.id === id);
  index === -1 ? null : undefined;
  const [removedContact] = response.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(response, null, 2));
  return removedContact;
}

async function addContact(data) {
  const response = await listContacts();
  const appendedContact = {
    id: uid(21),
    ...data,
  };
  response.push(appendedContact);
  await fs.writeFile(contactsPath, JSON.stringify(response, null, 2));
  return appendedContact;
}

async function updateContactById(id, data) {
  const response = await listContacts();
  const index = response.findIndex((res) => res.id === id);
  index === -1 ? null : undefined;

  response[index] = { id, ...data };
  await fs.writeFile(contactsPath, JSON.stringify(response, null, 2));
  return response[index];
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContactById,
};
