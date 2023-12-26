const express = require("express");

const app = express();

app.use(express.json());

app.get("/v1/student", (req, res) => {
  console.log("Getting");
  res.end(`{msg:\'My Get\'}`);
});

app.get("/v1/student/:id", (req, res) => {
  console.log("Getting with id");
  console.log(req.params["id"]);
  res.end(`{msg:\'My Get\'}`);
});

app.put("/v1/student", (req, res) => {
  console.log("Putting");
  console.log(req.body);
  res.end(`{msg:\'My Put'}`);
});

app.put("/v1/student/:id", (req, res) => {
  console.log("Putting with Id");
  console.log(req.body);
  console.log(req.params["id"]);
  res.end(`{msg:\'My Put'}`);
});

app.post("/v1/student", (req, res) => {
  console.log("Posting");
  console.log(req.body);
  res.end(`{msg:\'My Post'}`);
});

// app.route('/v1/student').post((req,res)=>{
//     res.end(`{msg:'Malar'}`)
// })

app.listen(3000, function () {
  console.log("Running at port 3000");
});

// Api's for
// 1. Profile get
// 2. Profile update
// 3. Getting attendance
// 4. Posting todays attendance
// 5. Getting fee details

app.get("/v1/profile", (req, res) => {
  console.log("Getting Profile");
  res.end(`{msg:'Malarvizhi'}`);
});

app.put("/v1/profile", (req, res) => {
  console.log("Updating Profile");
  console.log(req.body);
  res.end(`{msg:'Updating Profile'}`);
});

app.get("/v1/attendance", (req, res) => {
  console.log("Getting Attendance");
  res.end(`{msg:'Malarvizhi'}`);
});

app.post("/v1/attendance", (req, res) => {
  console.log("Posting attendance");
  console.log(req.body);
  res.end(`{msg:'Posting attendance'}`);
});

app.get("/v1/fees", (req, res) => {
  console.log("Getting Fee details");
  res.end(`{msg:'Malarvizhi fee details'}`);
});
