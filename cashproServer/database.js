const config = require("./environments/local");
const mongoose = require("mongoose");
const myDB = config.db;

module.exports.initConnect = function () {
  // Connect to Database
  mongoose.connect(myDB, { useUnifiedTopology: true, useNewUrlParser: true });

  // On Connection
  mongoose.connection.on("connected", () => {
    console.log("Connected to database " + myDB);
  });

  // On Error
  mongoose.connection.on("error", (err) => {
    console.log("Database error" + err);
  });

  return mongoose.connection;
};

module.exports.endConnect = function (connection) {
  // Connect to Database
  console.log("Ending connection");
};
