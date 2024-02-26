const Joi = require("joi");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const emailAuditSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

module.exports = emailAuditSchema;
