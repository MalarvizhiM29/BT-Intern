const express = require("express");

const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  res.send("hello");
});

app.put("/", function (req, res) {
  res.send("post");
});

app
  .route("/book")
  .get((req, res) => {
    res.send("Get a random book");
  })
  .post((req, res) => {
    console.log(req.body);
    res.send("Add a book");
  })
  .put((req, res) => {
    res.send("Update the book");
  });

app.listen(3000);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// const url  = "mongodb://127.0.0.1:27017/teaching"
// const client = MongoClient(url);

// const insertObj = async function(obj){
//     return await (await client.connect()).db('teaching')
//     .collection("student")
// }

// const insertTeacherData = async requestObj =>{
//     return await (await client.connect())
//     .db("teaching").collection("teachers")
//     .inserOne(requestObj,(err,res)=>{
//         if(err) throw err;
//         console.log("inserted teachers day")
//         return res;
//     })
// }

// app.post('/teacher',async (req,res)=>{
//     insertTeacherData(req.body).then
// })
