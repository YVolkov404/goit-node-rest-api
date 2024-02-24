const mongooseError = (error, next) => {
  error.status = 400;
  next();
};

module.exports = mongooseError;
