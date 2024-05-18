import mongoose from "mongoose";


const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/weCare", {
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
    });
    console.log("MongoDB connection established");
  } catch (e) {
    console.error("Connection Error:", e.message); 
  }
};


connectToDatabase();


const db = mongoose.connection;


db.on("error", (e) => console.error("MongoDB Connection Error:", e));
db.once("open", () => console.log("MongoDB connected successfully"));
db.once("close", () => console.log("MongoDB connection closed"));


export default db;
