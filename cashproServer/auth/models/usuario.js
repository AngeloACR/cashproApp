const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  names: {
    type: String,
  },
  lastnames: {
    type: String,
  },
  identification: {
    type: String,
  },
  birthday: {
    type: Date,
  },

  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  validToken: {
    type: String,
  },
  validTime: {
    type: Number,
  },
  validEmail: {
    type: Boolean,
    default: false,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  createdAt: { type: Date, default: Date.now },
});

const User = (module.exports = mongoose.model("User", userSchema));
