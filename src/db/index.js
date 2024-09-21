const mongoose = require("mongoose");
const { DB_NAME } = require("../constants");

exports.connectDB = async () => {
  try {
    const result = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(`MongoDB connected: ${result.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};