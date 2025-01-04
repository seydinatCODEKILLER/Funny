import mongoose from "mongoose";

const MultiplayerGameSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      unique: true,
      required: [true, "Le code de jeu est requis"],
    },
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "L'hôte est requis"],
    },
    participants: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        username: String,
        ready: { type: Boolean, default: false },
        score: { type: Number, default: 0 },
      },
    ],
    settings: {
      questionsCount: Number,
      category: String,
      difficulty: String,
      timePerQuestion: Number,
    },
    state: {
      type: String,
      enum: ["waiting", "in_progress", "finished"],
      default: "waiting",
    },
    questions: [
      {
        question: String,
        options: [String],
        correctAnswer: String,
      },
    ],
    currentQuestionIndex: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const MultiplayerGame = mongoose.model(
  "MultiplayerGame",
  MultiplayerGameSchema
);
export default MultiplayerGame;
