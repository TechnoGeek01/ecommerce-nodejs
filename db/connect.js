const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, { dbName: "ecommerce-api" });
};

module.exports = connectDB;
