import express from "express";
import {
  createMultiplayerGame,
  joinMultiplayerGame,
  startMultiplayerGame,
} from "../controllers/multiplayerGameController.js";
import security from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create_game", security, createMultiplayerGame);
router.post("/join_game", joinMultiplayerGame);
router.post("/start_game", security, startMultiplayerGame);

export default router;
