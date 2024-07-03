const express = require("express");
const UserController = require("./controllers/UserController");
const { UUID } = require("mongodb");
require("dotenv").config();
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/users", UserController.CreateUser)
app.get("/users", UserController.GetAllUser)
app.put("/users", UserController.UpdateUser)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
