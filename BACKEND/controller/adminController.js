
const User = require("../models/userSchema");
const validator = require("validator");
const bcrypt = require("bcrypt");

module.exports.updateProfile = async (req, res) => {
  try {
    const { firstName, lastName, avatar, age, password } = req.body;
    const allowedFields = ["firstName", "lastName", "avatar", "age", "password"];
    for (const field in req.body) {
      if (!allowedFields.includes(field)) {
        throw new Error("Field cannot be updated");
      }
    }
    if (!firstName ||!lastName ||!avatar ||!age) {
      throw new Error("Please provide all required fields");
    }
    if (password &&!validator.isStrongPassword(password)) {
      throw new Error("Password is not strong enough");
    }
    if (password) {
      req.body.password = bcrypt.hashSync(password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          avatar: req.body.avatar,
          age: req.body.age,
          password: req.body.password,
        },
      },
      { new: true }
    );
    const { password: _,...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};
