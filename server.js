const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const studentsRouter = require("./routes/students.js");

const app = express();

const PORT = process.env.PORT || 8070; //assign available port if 8070 not available

app.use(cors());
app.use(bodyParser.json());
app.use("/student", studentsRouter);

const URL = process.env.MONGODB_URL;

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Mongodb Connection Success!"))
  .catch((err) => console.log(err));

(err) => {
  if (err) throw err;
  console.log("Mongodb Connected");
};

app.listen(PORT, () => {
  console.log(`Server is up and running on port : ${PORT}`);
});
