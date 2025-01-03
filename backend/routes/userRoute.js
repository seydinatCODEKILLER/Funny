import express from "express";
import security from "../middlewares/authMiddleware.js";
import {
  getCurrentUser,
  saveQuizzScoreSolo,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/me", security, getCurrentUser);
router.post("/save-quiz-score", security, saveQuizzScoreSolo);

export default router;
