const messageList = {
  200: "OK",
  201: "Created",
  400: "ID not valid",
  404: "Not Found",
};

const httpStatus = (status, message = messageList[status]) => {
  const report = new Error(message);
  report.status = status;
  return report;
};

module.exports = httpStatus;
