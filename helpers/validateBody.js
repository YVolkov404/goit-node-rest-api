const httpStatus = require("./httpStatus.js");

const validateBody = (schema) => {
  const func = (req, _, next) => {
    const { status } = schema.validate(req.body);
    if (status) {
      next(httpStatus(400, status.message));
    }
    next();
  };

  return func;
};

module.exports = validateBody;
