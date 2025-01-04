import express from "express";
import http from "http";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import configureSocket from "./config/socket.js";
import authRouter from "./routes/authRoute.js";
import quizzRouter from "./routes/quizzRoute.js";
import userRouter from "./routes/userRoute.js";
import gameRouter from "./routes/gameRoute.js";
import multiPlayerRouter from "./routes/multiplayerRoute.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import { fileURLToPath } from "url";
import path from "path";

//Variables
dotenv.config();
const app = express();
const server = http.createServer(app);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//Routes
app.use("/api/auth", authRouter);
app.use("/api/quizz", quizzRouter);
app.use("/api/users", userRouter);
app.use("/api/games", gameRouter);
app.use("/api/multiplayerGame", multiPlayerRouter);

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
