const User = require("../models/userSchema");
const validator = require("validator");
const bcrypt = require("bcrypt");

module.exports.updateProfile = async (req, res) => {
  try {
    const { firstName, lastName, avatar, age, password } = req.body;
    const allowedFields = [
      "firstName",
      "lastName",
      "avatar",
      "age",
      "password",
    ];
    for (const field in req.body) {
      if (!allowedFields.includes(field)) {
        throw new Error("Field cannot be updated");
      }
    }
    const user = req.user;
    if (firstName) {
      user.firstName = req.body.firstName;
    }
    if (lastName) {
      user.lastName = req.body.lastName;
    }
    if (avatar) {
      user.avatar = req.body.avatar;
    }
    if (age) {
      user.age = req.body.age;
    }
    if (password) {
      user.password = bcrypt.hashSync(req.body.password, 10);
    }
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};
