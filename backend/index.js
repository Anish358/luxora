import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongoDB.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

// App config
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// Endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
  res.send("Hello worlds");
});

// Start server
app.listen(PORT, () => {
  console.log(`Sever started: http://localhost:${PORT}`);
});
