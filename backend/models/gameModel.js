import mongoose from "mongoose";

const GameSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Le nom du jeu est requis"],
      unique: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ["quiz", "guess", "tictactoe", "multiplayer", "other"],
      required: [true, "Le type de jeu est requis"],
    },
    description: {
      type: String,
      trim: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Le créateur du jeu est requis"],
    },
    metadata: {
      // Champs spécifiques au jeu (facultatif)
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const Game = mongoose.model("Game", GameSchema);
export default Game;
