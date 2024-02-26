const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();
const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  post: 465,
  secure: true,
  auth: {
    user: "fantom.ass@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendUserEmail = async (data) => {
  const email = { ...data, from: "fantom.ass@meta.ua" };
  await transport.sendMail(email);
  return true;
};

module.exports = sendUserEmail;
