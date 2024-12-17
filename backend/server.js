import express from "express";
import http from "http";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import configureSocket from "./config/socket.js";

dotenv.config();
const app = express();
const server = http.createServer(app);

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
