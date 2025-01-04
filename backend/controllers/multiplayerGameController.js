import errorHandler from "../utils/errorHandler.js";
import MultiplayerGame from "../models/multiPlayerGameModel.js";
import { generateUniqueCode } from "../utils/generateUniqueCode.js";

export const createMultiplayerGame = async (req, res, next) => {
  try {
    const { userId } = req.user;
    if (!userId) {
      return next(errorHandler(401, "Unauthorized"));
    }
    const { questionsCount, category, difficulty, timePerQuestion } = req.body;
    const code = generateUniqueCode();
    const game = new MultiplayerGame({
      code,
      host: userId,
      settings: { questionsCount, category, difficulty, timePerQuestion },
    });
    await game.save();
    res.status(201).json({ message: "Partie créée", game });
  } catch (error) {
    next(error);
  }
};

export const joinMultiplayerGame = async (req, res, next) => {
  try {
    const { code } = req.body;
    const { userId, username } = req.user;
    if (!userId) {
      return next(errorHandler(401, "Unauthorized"));
    }
    const game = await MultiplayerGame.findOne({ code });
    if (!game) {
      return next(errorHandler(404, "Partie non trouvée"));
    }
    if (game.participants.some((p) => p.userId.toString() === userId)) {
      return next(errorHandler(400, "Vous êtes déjà dans cette partie"));
    }
    const participant = { userId, username };
    game.participants.push(participant);
    await game.save();
    res.status(200).json({ message: "Vous êtes désormais dans la partie" });
  } catch (error) {
    next(error);
  }
};

export const startMultiplayerGame = async (req, res, next) => {
  try {
    const { gameId } = req.body;
    const { userId } = req.user;
    if (!userId) {
      return next(errorHandler(401, "Unauthorized"));
    }
    const game = await MultiplayerGame.findById(gameId);
    if (!game) {
      return next(errorHandler(404, "Partie non trouvée"));
    }
    if (!game.participants.every((p) => p.ready)) {
      return next(errorHandler(400, "Tous les joueurs ne sont pas prêts"));
    }
    const apiUrl = `https://opentdb.com/api.php?amount=${game.settings.questionsCount}&category=${game.settings.category}&difficulty=${game.settings.difficulty}&type=multiple`;
    const response = await axios.get(apiUrl);

    game.questions = response.data.results.map((q) => ({
      question: q.question,
      options: [...q.incorrect_answers, q.correct_answer].sort(
        () => Math.random() - 0.5
      ),
      correctAnswer: q.correct_answer,
    }));
    game.state = "in_progress";
    await game.save();
    res.status(200).json({ message: "La partie a commencé", game });
  } catch (error) {
    next(error);
  }
};
