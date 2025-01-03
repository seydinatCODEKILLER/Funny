import Game from "../models/gameModel.js";
import errorHandler from "../utils/errorHandler.js";

export const createGame = async (req, res, next) => {
  try {
    const { userId } = req.user;
    if (!userId) {
      return next(errorHandler(401, "Unauthorized"));
    }
    const { name, type, description } = req.body;
    const newGame = new Game({
      name,
      type,
      description,
      createdBy: userId,
    });
    const savedGame = await newGame.save();
    res.status(201).json({ message: "Jeu creer avec success", savedGame });
  } catch (error) {
    next(error);
  }
};

export const getAllGames = async (req, res, next) => {
  try {
    const games = await Game.find();
    res.status(200).json({ jeux: games });
  } catch (error) {
    next(error);
  }
};
