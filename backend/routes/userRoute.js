import express from "express";
import security from "../middlewares/authMiddleware.js";
import {
  getAllUsers,
  getCurrentUser,
  saveQuizzScoreSolo,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/me", security, getCurrentUser);
router.get("/", getAllUsers);
router.post("/save-quiz-score", security, saveQuizzScoreSolo);

export default router;
