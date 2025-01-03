import express from "express";
import { createGame, getAllGames } from "../controllers/gameController.js";
import security from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/", security, createGame);
router.get("/", getAllGames);

export default router;
