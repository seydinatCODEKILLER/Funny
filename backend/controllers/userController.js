import User from "../models/userModel.js";
import errorHandler from "../utils/errorHandler.js";

export const getCurrentUser = async (req, res, next) => {
  try {
    const { userId } = req.user;
    if (!userId) {
      return next(errorHandler(401, "Unauthorized"));
    }

    const userCurrent = await User.findById(userId).select("-password");
    if (!userCurrent) {
      return next(errorHandler(404, "User not found"));
    }
    res.status(200).json({ userCurrent });
  } catch (error) {
    next(error);
  }
};

export const saveQuizzScoreSolo = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { gameId, score, result } = req.body;

    // Recherche de l'utilisateur
    const user = await User.findById(userId);
    if (!user) {
      return next(errorHandler(404, "User not found"));
    }

    // Recherche d'un jeu existant pour cet utilisateur et ce gameId
    const gameIndex = user.gameScores.findIndex(
      (game) => game.gameId.toString() === gameId
    );

    if (gameIndex !== -1) {
      // Si le jeu existe, ajoutez un score à l'élément existant
      user.gameScores[gameIndex].scores.push({
        score,
        result,
        mode: "solo",
        date: Date.now(),
      });
    } else {
      // Si le jeu n'existe pas, ajoutez un nouvel objet de jeu avec un score
      const newScore = {
        gameId,
        type: "quiz",
        scores: [
          {
            score,
            result,
            mode: "solo",
            date: Date.now(),
          },
        ],
      };
      user.gameScores.push(newScore);
    }

    // Sauvegarde des modifications
    await user.save();
    res.status(201).json({ message: "Score saved" });
  } catch (error) {
    next(error);
  }
};
