import mongoose from "mongoose";

const DBConnection = () => {
  const MONGODB_URI =
    "mongodb+srv://Manik:123Manik@cluster0.tjo5va0.mongodb.net/";
  try {
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connection with the database", error.message);
  }
};

export default DBConnection;
