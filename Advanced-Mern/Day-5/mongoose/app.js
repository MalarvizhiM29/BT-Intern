const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use((err,req,res,next)=>{
  console.log(err);
  res.status(500).send("Unhandled Exception")
})

const mongoUrl = "mongodb+srv://malarm2004:hello@app.kiypbvw.mongodb.net/";

mongoose.connection.on("connected", () => {
  console.log("Connected");
});

mongoose.connect(mongoUrl);

const StudentSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  rollnumber: Number,
});

const StudentModel = mongoose.model("student", StudentSchema);

// app.get("/student", (req, res) => {
//   return StudentModel.find({}).then((result) => {
//     res.send(JSON.stringify(result));
//   });
// });

// app.get("/student/:id", (req, res) => {
//   return StudentModel.find({ "_id": req.params["id"] }).then((result) => {
//     res.send(JSON.stringify(result));
//   });
// });

// app.get("/student/first_name/:name", (req, res) => {
//   return StudentModel.find({ first_name: req.params["name"] }).then(
//     (result) => {
//       res.send(JSON.stringify(result));
//     }
//   );
// });

app.get("/student", (req, res) => {
  return StudentModel.find()
  .sort({'rollnumber':1})
  .skip(2)
  .limit(1)
  .then((result) => {
    res.send(JSON.stringify(result));
  });
});

app.post("/getStudentList",(req,res)=>{
  const sort = {};
  sort[req.body.sortby] = req.body.orderby

  return StudentModel.find({})
    .sort(`{${req.body.sortby}:${req.body.orderby}}`)
    .skip((req.body.page-1)*req.body.limit)
    .limit(req.body.limit)
    .then(result=>{
      res.send(JSON.stringify(result))
    })
})

app.put("/student/:id", (req, res) => {
  const filter = { "_id": req.params["id"] };
  const update = { first_name: req.body.first_name };
  return StudentModel.findOneAndUpdate(filter, update, {
    upsert: true,
  }).then((result) => {
    return res.end(JSON.stringify(result));
  });
});

app.delete("/student/:id", (req, res) => {
  return StudentModel.deleteOne({ "_id": req.params["id"] }).then(
    (result) => {
      res.send(JSON.stringify(result));
    }
  );
});

// app.post("/student", (req, res) => {
//   return StudentModel({ ...req.body })
//     .save()
//     .then((result) => {
//       res.send(result.toObject());
//     });
// });

app.post("/student/bulk", (req, res) => {
  const bulkData = [];
  for (const data of req.body) {
    bulkData.push(new StudentModel(data));
  }
  return StudentModel.bulkSave(bulkData).then((result) => {
    res.send(result);
  });
});

app.listen(8080);
