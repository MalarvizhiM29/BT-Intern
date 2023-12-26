var http = require("http");
const ex = require("./first-include");
var url = require("url");
var fs = require("fs");

fs.readFile("file_system/file.html", function (err, data) {
  console.log(data.toString());
});

const urlExamples = () => {
  var adr = "http://localhost:8080/default.htm?year=2017&month=february";
  var q = url.parse(adr, true);

  console.log(q.host);
  console.log(q.pathname);
  console.log(q.search);

  var qdata = q.query;
  console.log(qdata.month);
};

http
  .createServer(function (req, res) {
    var url = req.url;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time are currently:" + ex.myDateTime());
    res.write("<br/>+req.url");
    res.end("<br/>Hello World!");

    urlExamples();
  })
  .listen(8080);
