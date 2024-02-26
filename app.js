const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const contactsRouter = require("./routes/api/contactsRouter");
const authRouter = require("./routes/api/authRouter");

dotenv.config();
const { DB_HOST, PORT = 3000 } = process.env;

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/users", authRouter);
app.use("/api/contacts", contactsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connection successful!"))
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running. Use our API on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
