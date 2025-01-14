import Quiz from "../models/quizModel.js";
import errorHandler from "../utils/errorHandler.js";
import Game from "../models/gameModel.js";
import axios from "axios";

export const createQuiz = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { category, difficulty, nbQuestions } = req.body;

    // Validation de l'utilisateur
    if (!userId) {
      return next(errorHandler(401, "Unauthorized"));
    }

    // Vérification si le jeu existe
    const game = await Game.findById("6776c0511e24f37ee7b8fdd8");
    if (!game) {
      return next(errorHandler(404, "Jeu non trouvé"));
    }

    // Construction de l'URL de l'API
    const apiUrl = `https://opentdb.com/api.php?amount=${nbQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`;
    const response = await axios.get(apiUrl);

    // Transformation des questions pour le modèle
    const questions = response.data.results.map((q) => ({
      question: q.question,
      options: [...q.incorrect_answers, q.correct_answer].sort(
        () => Math.random() - 0.5
      ),
      correctAnswer: q.correct_answer,
    }));

    // Création et sauvegarde du quiz
    const quiz = new Quiz({
      title: `Quiz ${category} - ${difficulty}`,
      category,
      difficulty,
      questions,
      createdBy: userId,
      gameId: game._id,
    });
    await quiz.save();

    res.status(201).json({ message: "Quiz créé avec succès", quiz });
  } catch (error) {
    console.error("Erreur lors de la création du quiz :", error);
    next(error);
  }
};

export const getAllQuizs = async (req, res, next) => {
  try {
    const quizs = await Quiz.find().populate("createdBy");
    res.status(200).json({ success: true, data: quizs });
  } catch (error) {
    next(error);
  }
};

export const getQuizById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const quiz = await Quiz.findById(id).populate("createdBy");
    if (!quiz) {
      return next(errorHandler(404, "Quiz not found"));
    }
    res.status(200).json({ success: true, data: quiz });
  } catch (error) {
    next(error);
  }
};

export const updateQuiz = async (req, res, next) => {
  try {
    const { userId } = req.user;
    if (!userId) {
      return next(errorHandler(401, "Unauthorized"));
    }
    const { id } = req.params;
    const updated = req.body;
    const quiz = await Quiz.findByIdAndUpdate(id, updated, {
      new: true,
      runValidators: true,
    });
    if (!quiz) {
      return next(errorHandler(404, "Quiz not found"));
    }
    res.status(200).json({ success: true, data: quiz });
  } catch (error) {
    next(error);
  }
};

export const deleteQuiz = async (req, res, next) => {
  try {
    const { userId } = req.user;
    if (!userId) {
      return next(errorHandler(401, "Unauthorized"));
    }
    const { id } = req.params;
    await Quiz.findByIdAndDelete(id);
    const quiz = await Quiz.findByIdAndDelete(id);
    if (!quiz) {
      return next(errorHandler(404, "Quiz not found"));
    }
    res
      .status(200)
      .json({ success: true, message: "Quiz supprimé avec succès" });
  } catch (error) {
    next(error);
  }
};
