import express from "express";
import http from "http";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import configureSocket from "./config/socket.js";
import authRouter from "./routes/authRoute.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

//Variables
dotenv.config();
const app = express();
const server = http.createServer(app);

// Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/auth", authRouter);

//Middleware d'erreur
app.use(errorMiddleware);

const startServer = async () => {
  try {
    await connectDB();
    configureSocket(server);
    const port = process.env.PORT || 3000;
    server.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

startServer();
