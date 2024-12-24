import express from "express";
import security from "../middlewares/authMiddleware.js";
import { getCurrentUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/me", security, getCurrentUser);

export default router;
