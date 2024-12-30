import express from "express";
import {
  createQuiz,
  deleteQuiz,
  getAllQuizs,
  getQuizById,
  updateQuiz,
} from "../controllers/quizzController.js";
import security from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAllQuizs);
router.get("/:id", getQuizById);
router.post("/solo", security, createQuiz);
router.put("/:id", security, updateQuiz);
router.delete("/:id", security, deleteQuiz);

export default router;
