const mongoose = require("mongoose");

const db = async () => {
  await mongoose.connect(
    "mongodb+srv://heet:12345@cluster0.4hvpntg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("Database Connected Successfully");
};

module.exports = db;
