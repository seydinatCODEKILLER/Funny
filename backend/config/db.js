import mongoose from "mongoose";

const connectDB = async () => {
  return mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"));
};

export default connectDB;
