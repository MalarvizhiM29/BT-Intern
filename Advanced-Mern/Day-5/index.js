const express = require("express");

const app = express();

app.use(express.json());

app.put(
  "/v1/student",
  (req, res, next) => {
    res.write("Hello World!");
    next();
    console.log("Reached");
    // res.end();
  },
  (req, res) => {
    console.log("Hello");
    console.log(req.body);
    res.end(`{msg:\'Malar\'}`);
  }
);

app.listen(3010, function () {
  console.log("Running at port 3000");
});
