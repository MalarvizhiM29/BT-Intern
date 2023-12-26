// const mongoose = require("mongoose");

// const url = "mongodb://127.0.0.1:27017/21EE024";

// async function connectAndInsert() {
//   try {
//     await mongoose.connect(url, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     const ExampleSchema = new mongoose.Schema({
//       name: String,
//       address: String,
//       roll_number: String,
//     });

//     const ExampleModel = mongoose.model("Example", ExampleSchema);

//     const myobj = { name: "Ram", address: "Highway 37", roll_number: "1" };

//     const result = await ExampleModel.create(myobj);

//     console.log("1 document inserted:", result);
//   } catch (error) {
//     console.error("Error inserting data:", error);
//   } finally {
//     mongoose.connection.close();
//   }
// }

// connectAndInsert();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/crud");

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const UserModel = mongoose.model("users", UserSchema);

app.use(express.json());

app.get("/getUsers", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/createUser", async (req, res) => {
  const { name, age } = req.body;

  const newUser = new UserModel({ name, age });

  try {
    await newUser.save();
    res.json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
