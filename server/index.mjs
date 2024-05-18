import express from "express";
import cors from "cors";
import db from "./db/index.mjs";
import ProductRouter from "./routes/productRouter.mjs";



const app = express();


const corsOptions = {
  origin: "http://localhost:5173", 
};


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.options("*", cors());



db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.use("/api", ProductRouter);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
