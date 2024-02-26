const { isValidObjectId } = require("mongoose");
const httpStatus = require("./httpStatus");

const isValid = (req, res, next) => {
  const { id } = req.params;
  !isValidObjectId(id) ? httpStatus(400) : next();
};

module.exports = isValid;
