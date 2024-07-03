const { ObjectId } = require("mongodb");
const { UserCollection } = require("../config/mongodb");


class UserController {
  static async CreateUser(req, res, next) {
    try {
      const { name, email } = req.body;
      if (!name) {
        throw "Name is required";
      }
      if (!email) {
        throw "Email is required";
      }
      const isNameUnique = await UserCollection.find({
        name: name,
      });
      if (isNameUnique) {
        throw "Name is already existed";
      }
      const isEmailUnique = await UserCollection.findOne({
        email: email,
      });
      if (isEmailUnique) {
        throw "Email is already existed";
      }
      const newUser = await UserCollection.insertOne(req.body);
      if (newUser) {
        res.send(newUser);
      }
    } catch (error) {
      res.send(error);
    }
  }

  static async GetAllUser(req, res) {
    try {
      const Users = await UserCollection.find().toArray();
      res.send(Users);
    } catch (error) {
      res.send(error);
    }
  }

  static async UpdateUser(req, res) {
    try {
        const user = await UserCollection.findOne(
            {_id: new ObjectId()}
        )
    } catch (error) {
      res.send(error);
    }
  }
}
module.exports = UserController;
