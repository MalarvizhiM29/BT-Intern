const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("Get");
});

app.listen(3000, () => {
  console.log("Listening");
});
