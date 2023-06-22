const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  //mongodb automatically generates object ID

  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactNo: {
    type: Number,
    required: true,
  },
  school: {
    type: String,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
