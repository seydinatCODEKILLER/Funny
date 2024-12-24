import User from "../models/userModel.js";
import errorHandler from "../utils/errorHandler.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(errorHandler(400, "Cet email est déjà utilisé"));
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign(
      { id: newUser._id, role: newUser.role },
      process.env.TOKEN_KEY,
      { expiresIn: "1h" }
    );
    res.status(201).json({ message: "Inscription reussit", newUser, token });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return next(errorHandler(400, "Cet email est invalide"));
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return next(errorHandler(400, "Mot de passe incorrect"));
    }
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.TOKEN_KEY,
      { expiresIn: "1h" }
    );
    const { password: pass, ...rest } = user._doc;
    res.status(200).json({
      message: "Connexion réussie",
      token,
      rest,
    });
  } catch (error) {
    next(error);
  }
};
