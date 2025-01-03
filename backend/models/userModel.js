import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Le nom d'utilisateur est requis"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "L'email est requis"],
    unique: true,
    match: [/\S+@\S+\.\S+/, "Veuillez entrer un email valide"],
  },
  password: {
    type: String,
    required: [true, "Le mot de passe est requis"],
    minlength: [6, "Le mot de passe doit contenir au moins 6 caractères"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  gameScores: [
    {
      gameId: { type: mongoose.Schema.Types.ObjectId, ref: "Game" },
      type: { type: String, enum: ["quiz", "guess", "tictactoe", "memory"] },
      scores: [
        {
          score: Number,
          date: { type: Date, default: Date.now },
          mode: { type: String, enum: ["solo", "multiplayer"] },
          duration: Number,
          opponent: String,
          result: { type: String, enum: ["win", "lose", "draw"] },
          attempts: Number,
        },
      ],
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
