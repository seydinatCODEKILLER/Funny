import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Le titre du quiz est requis"],
    trim: true,
  },
  category: {
    type: String,
    required: [true, "La catégorie est requise"],
  },
  difficulty: {
    type: String,
    enum: ["facile", "moyen", "difficile"],
    required: [true, "Le niveau de difficulté est requis"],
  },
  questions: [
    {
      question: { type: String, required: true },
      options: [{ type: String, required: true }],
      correctAnswer: { type: String, required: true },
    },
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Le créateur du quiz est requis"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Quiz = mongoose.model("Quiz", QuizSchema);
export default Quiz;
