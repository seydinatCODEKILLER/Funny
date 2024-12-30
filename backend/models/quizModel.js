import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema(
  {
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
      enum: ["easy", "Medium", "Hard"],
      required: [true, "Le niveau de difficulté est requis"],
    },
    description: {
      type: String,
      trim: true,
    },
    questions: [
      {
        question: { type: String, required: true },
        options: {
          type: [String],
          validate: {
            validator: (v) => v.length >= 2,
            message: "Chaque question doit avoir au moins deux options",
          },
        },
        correctAnswer: {
          type: String,
          required: true,
          validate: {
            validator: function (answer) {
              return this.options.includes(answer);
            },
            message:
              "La réponse correcte doit correspondre à l'une des options",
          },
        },
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Le créateur du quiz est requis"],
    },
  },
  {
    timestamps: true,
  }
);

const Quiz = mongoose.model("Quiz", QuizSchema);
export default Quiz;
