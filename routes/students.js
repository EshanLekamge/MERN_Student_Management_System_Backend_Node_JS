const router = require("express").Router();

let Student = require("../models/Student");

// http://localhost : 8070/student/addStudent

router.route("/addStudent").post((req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const gender = req.body.gender;
  const address = req.body.address;
  const contactNo = Number(req.body.contactNo);
  const school = req.body.school;

  const newStudent = new Student({
    name,
    age,
    gender,
    address,
    contactNo,
    school,
  });

  newStudent
    .save()
    .then(() => {
      res.json("Student Data Inserted Successfuly");
    })
    .catch((err) => {
      console.log(err);
    });
});

// http://localhost : 8070/student

router.route("/").get((req, res) => {
  Student.find()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      console.log(err);
    });
});

// http://localhost : 8070/student/updateStudent/qwqwrqr233431rq

router.route("/updateStudent/:id").put(async (req, res) => {
  let userId = req.params.id;

  const { name, age, gender, address, contactNo, school } = req.body;

  const updateStudent = {
    name,
    age,
    gender,
    address,
    contactNo,
    school,
  };

  const update = await Student.findByIdAndUpdate(userId, updateStudent)
    .then((student) => {
      res.status(200).send({ status: "User Updated", student });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating user data", error: err.message });
    });
});

// http://localhost : 8070/student/deleteStudent/qwqwrqr233431rq

router.route("/deleteStudent/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await Student.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "User Deleted" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with deleting user data", error: err.message });
    });
});

router.route("/getStudent/:id").get(async (req, res) => {
  let userId = req.params.id;

  Student.findById(userId)
    .then((student) => {
      res.json(student);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with get user", error: err.message });
    });
});
module.exports = router;
