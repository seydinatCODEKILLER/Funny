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
