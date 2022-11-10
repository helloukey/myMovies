const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required."],
      minlength: [3, "First Name should of minimum 3 characters."],
      maxlength: [12, "First Name can be of maximum 12 characters only."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
  },
  { timestamps: true }
);

// Register static method
userSchema.statics.register = async function (firstName, email, password) {
  // check if all fields are provided
  if (!firstName || !email || !password) {
    throw Error("All fields must be provided.");
  }

  // check if first name length is more than 3 characters
  if (firstName.length < 3) {
    throw Error("First name should be of at least 3 characters.");
  }
  // check if email is valid
  if (!validator.isEmail(email)) {
    throw Error("Please enter a valid email address.");
  }
  // check if password is strong
  if (!validator.isStrongPassword) {
    throw Error("Please provide a strong password.");
  }

  // check if email already exists
  const account = await this.findOne({ email });

  // Throw an error if the email already exists
  if (account) {
    throw Error("Email already registered.");
  }

  // generate hashed password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ firstName, email, password: hash });
  return user;
};

// Login static method
userSchema.statics.login = async function (email, password) {
  // check if all fields are provided
  if (!email || !password) {
    throw Error("All fields must be provided.");
  }

  // check if email already exists
  const user = await this.findOne({ email });

  // Throw an error if the email does not exists
  if (!user) {
    throw Error("This email is not registered.");
  }

  // compare password
  const comparedPassword = await bcrypt.compare(password, user.password);

  // check if password is correct
  if (!comparedPassword) {
    throw Error("Incorrect password.");
  }
  return user;
};

module.exports = mongoose.model("User", userSchema);
