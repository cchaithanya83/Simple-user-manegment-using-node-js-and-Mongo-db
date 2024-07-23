const mongoose = require("mongoose");

async function connectMongoDb() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/node-app")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Err", err));
}

module.exports = connectMongoDb;
